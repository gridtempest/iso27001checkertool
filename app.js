// Enhanced Application Logic with Risk Assessment Table & Implementation Checklist

let riskAssessments = [];

// Find relevant controls based on risk description
function findRelevantControls(riskDescription) {
    const searchTerms = riskDescription.toLowerCase().split(' ');
    const controlMatches = [];

    controlsDatabase.forEach(control => {
        let matchScore = 0;
        
        // Check if any keyword matches the risk description
        control.keywords.forEach(keyword => {
            searchTerms.forEach(term => {
                if (keyword.toLowerCase().includes(term) || term.includes(keyword.toLowerCase())) {
                    matchScore += 2;
                }
            });
        });

        // Check if risk description matches related risks
        control.relatedRisks.forEach(risk => {
            if (riskDescription.toLowerCase().includes(risk.toLowerCase()) || 
                risk.toLowerCase().includes(riskDescription.toLowerCase())) {
                matchScore += 3;
            }
        });

        if (matchScore > 0) {
            controlMatches.push({ ...control, matchScore });
        }
    });

    // Sort by match score (highest first) and return top 8
    return controlMatches.sort((a, b) => b.matchScore - a.matchScore).slice(0, 8);
}

// Get category CSS class
function getCategoryClass(category) {
    const classes = {
        'Organizational Controls': 'category-organizational',
        'People Controls': 'category-people',
        'Physical Controls': 'category-physical',
        'Technological Controls': 'category-technological'
    };
    return classes[category] || '';
}

// Get status CSS class
function getStatusClass(status) {
    const classes = {
        'Implemented': 'status-implemented',
        'Planned': 'status-planned',
        'Not Implemented': 'status-not-implemented',
        'Not Applicable': 'status-not-applicable'
    };
    return classes[status] || '';
}

// Calculate risk level
function calculateRiskLevel(likelihood, impact) {
    const scores = { Low: 1, Medium: 2, High: 3 };
    const total = scores[likelihood] * scores[impact];
    
    if (total <= 2) return { level: 'Low', class: 'risk-low' };
    if (total <= 4) return { level: 'Medium', class: 'risk-medium' };
    return { level: 'High', class: 'risk-high' };
}

// Get implementation statistics
function getImplementationStats(controls) {
    const total = controls.length;
    const implemented = controls.filter(c => c.status === 'Implemented').length;
    const planned = controls.filter(c => c.status === 'Planned').length;
    const notImplemented = controls.filter(c => c.status === 'Not Implemented').length;
    const notApplicable = controls.filter(c => c.status === 'Not Applicable').length;
    
    const applicableControls = total - notApplicable;
    const percentage = applicableControls > 0 ? Math.round((implemented / applicableControls) * 100) : 0;
    
    return { total, implemented, planned, notImplemented, notApplicable, percentage };
}

// Add new risk assessment
function handleAddRisk() {
    const riskInput = document.getElementById('riskInput').value.trim();
    
    if (riskInput) {
        const controls = findRelevantControls(riskInput);
        const newAssessment = {
            id: Date.now(),
            risk: riskInput,
            likelihood: 'Medium',
            impact: 'Medium',
            controls: controls.map(c => ({
                ...c,
                status: 'Not Implemented'
            }))
        };
        
        riskAssessments.push(newAssessment);
        document.getElementById('riskInput').value = '';
        displayRiskAssessments();
    }
}

// Remove risk assessment
function handleRemoveRisk(id) {
    riskAssessments = riskAssessments.filter(r => r.id !== id);
    displayRiskAssessments();
}

// Update control status
function handleStatusChange(riskId, controlId, newStatus) {
    riskAssessments = riskAssessments.map(risk => {
        if (risk.id === riskId) {
            return {
                ...risk,
                controls: risk.controls.map(control => 
                    control.id === controlId ? { ...control, status: newStatus } : control
                )
            };
        }
        return risk;
    });
    displayRiskAssessments();
}

// Update likelihood
function handleLikelihoodChange(riskId, value) {
    riskAssessments = riskAssessments.map(risk => 
        risk.id === riskId ? { ...risk, likelihood: value } : risk
    );
    displayRiskAssessments();
}

// Update impact
function handleImpactChange(riskId, value) {
    riskAssessments = riskAssessments.map(risk => 
        risk.id === riskId ? { ...risk, impact: value } : risk
    );
    displayRiskAssessments();
}

// Display all risk assessments
function displayRiskAssessments() {
    const container = document.getElementById('assessmentsContainer');
    const resultsSection = document.getElementById('resultsSection');
    
    if (riskAssessments.length === 0) {
        resultsSection.style.display = 'none';
        return;
    }
    
    resultsSection.style.display = 'block';
    
    container.innerHTML = riskAssessments.map(assessment => {
        const riskLevel = calculateRiskLevel(assessment.likelihood, assessment.impact);
        const stats = getImplementationStats(assessment.controls);
        
        return `
            <div class="risk-assessment-card">
                <!-- Risk Header -->
                <div class="risk-header">
                    <div class="risk-header-content">
                        <div class="risk-title-row">
                            <svg class="warning-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                <line x1="12" y1="9" x2="12" y2="13"></line>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <h2 class="risk-title">${assessment.risk}</h2>
                            <button class="remove-btn" onclick="handleRemoveRisk(${assessment.id})">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polyline points="3 6 5 6 21 6"></polyline>
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                </svg>
                            </button>
                        </div>
                        
                        <!-- Risk Parameters -->
                        <div class="risk-parameters">
                            <div class="parameter-group">
                                <label>Likelihood:</label>
                                <select onchange="handleLikelihoodChange(${assessment.id}, this.value)">
                                    <option ${assessment.likelihood === 'Low' ? 'selected' : ''}>Low</option>
                                    <option ${assessment.likelihood === 'Medium' ? 'selected' : ''}>Medium</option>
                                    <option ${assessment.likelihood === 'High' ? 'selected' : ''}>High</option>
                                </select>
                            </div>
                            
                            <div class="parameter-group">
                                <label>Impact:</label>
                                <select onchange="handleImpactChange(${assessment.id}, this.value)">
                                    <option ${assessment.impact === 'Low' ? 'selected' : ''}>Low</option>
                                    <option ${assessment.impact === 'Medium' ? 'selected' : ''}>Medium</option>
                                    <option ${assessment.impact === 'High' ? 'selected' : ''}>High</option>
                                </select>
                            </div>
                            
                            <div class="parameter-group">
                                <label>Risk Level:</label>
                                <span class="risk-level ${riskLevel.class}">${riskLevel.level}</span>
                            </div>
                            
                            <div class="progress-group">
                                <span class="progress-label">Implementation Progress:</span>
                                <div class="progress-bar-container">
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${stats.percentage}%"></div>
                                    </div>
                                    <span class="progress-percentage">${stats.percentage}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Summary Stats -->
                <div class="stats-grid">
                    <div class="stat-card stat-implemented">
                        <div class="stat-number">${stats.implemented}</div>
                        <div class="stat-label">Implemented</div>
                    </div>
                    <div class="stat-card stat-planned">
                        <div class="stat-number">${stats.planned}</div>
                        <div class="stat-label">Planned</div>
                    </div>
                    <div class="stat-card stat-not-implemented">
                        <div class="stat-number">${stats.notImplemented}</div>
                        <div class="stat-label">Not Implemented</div>
                    </div>
                    <div class="stat-card stat-not-applicable">
                        <div class="stat-number">${stats.notApplicable}</div>
                        <div class="stat-label">Not Applicable</div>
                    </div>
                </div>
                
                <!-- Controls Table -->
                <div class="table-container">
                    <table class="controls-table">
                        <thead>
                            <tr>
                                <th>Control ID</th>
                                <th>Control Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Implementation Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${assessment.controls.map((control, idx) => `
                                <tr>
                                    <td class="control-id">${control.id}</td>
                                    <td class="control-title-cell">${control.title}</td>
                                    <td>
                                        <span class="control-category ${getCategoryClass(control.category)}">
                                            ${control.category}
                                        </span>
                                    </td>
                                    <td class="control-description">${control.description}</td>
                                    <td class="control-status-cell">
                                        <select 
                                            class="status-select ${getStatusClass(control.status)}"
                                            onchange="handleStatusChange(${assessment.id}, '${control.id}', this.value)"
                                        >
                                            <option ${control.status === 'Not Implemented' ? 'selected' : ''}>Not Implemented</option>
                                            <option ${control.status === 'Planned' ? 'selected' : ''}>Planned</option>
                                            <option ${control.status === 'Implemented' ? 'selected' : ''}>Implemented</option>
                                            <option ${control.status === 'Not Applicable' ? 'selected' : ''}>Not Applicable</option>
                                        </select>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }).join('');
}

// Load predefined risk examples
function loadExamples() {
    const container = document.getElementById('examplesContainer');
    
    container.innerHTML = predefinedRisks.map(risk => `
        <button class="example-btn" onclick="document.getElementById('riskInput').value = '${risk}'">${risk}</button>
    `).join('');
}

// Print functionality
function handlePrint() {
    if (riskAssessments.length === 0) {
        alert('Please add at least one risk assessment before printing.');
        return;
    }
    
    // Add print date to header
    const header = document.querySelector('.header');
    const today = new Date().toLocaleDateString('en-GB', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    header.setAttribute('data-date', today);
    
    // Trigger print
    window.print();
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    // Load examples
    loadExamples();
    
    // Add risk button click
    document.getElementById('addRiskBtn').addEventListener('click', handleAddRisk);
    
    // Print button click
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', handlePrint);
    }
    
    // Enter key press
    document.getElementById('riskInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAddRisk();
        }
    });
});