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

// Display risk matrix
function displayRiskMatrix() {
    const matrixContainer = document.getElementById('riskMatrixContainer');
    
    if (riskAssessments.length === 0) {
        matrixContainer.style.display = 'none';
        return;
    }
    
    matrixContainer.style.display = 'block';
    
    // Create 3x3 matrix
    const matrix = {
        'High-High': [], 'High-Medium': [], 'High-Low': [],
        'Medium-High': [], 'Medium-Medium': [], 'Medium-Low': [],
        'Low-High': [], 'Low-Medium': [], 'Low-Low': []
    };
    
    // Categorize risks
    riskAssessments.forEach(assessment => {
        const key = `${assessment.likelihood}-${assessment.impact}`;
        matrix[key].push(assessment);
    });
    
    // Get risk color class
    const getRiskColorClass = (likelihood, impact) => {
        const riskLevel = calculateRiskLevel(likelihood, impact);
        return riskLevel.class;
    };
    
    // Build matrix HTML
    const matrixHTML = `
        <div class="risk-matrix-card">
            <div class="matrix-header">
                <h2 class="matrix-title">
                    <svg class="matrix-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                    Risk Matrix
                </h2>
                <div class="matrix-legend">
                    <span class="legend-item">
                        <span class="legend-color risk-high"></span>
                        High Risk
                    </span>
                    <span class="legend-item">
                        <span class="legend-color risk-medium"></span>
                        Medium Risk
                    </span>
                    <span class="legend-item">
                        <span class="legend-color risk-low"></span>
                        Low Risk
                    </span>
                </div>
            </div>
            
            <div class="matrix-grid-container">
                <div class="matrix-y-label">
                    <div class="y-label-text">LIKELIHOOD</div>
                </div>
                
                <div class="matrix-content">
                    <div class="matrix-grid">
                        <!-- High Likelihood Row -->
                        <div class="matrix-cell ${getRiskColorClass('High', 'Low')}" onclick="showRisksInCell('High', 'Low')">
                            <div class="cell-label">H/L</div>
                            <div class="cell-count">${matrix['High-Low'].length}</div>
                            ${matrix['High-Low'].length > 0 ? '<div class="cell-risks">' + matrix['High-Low'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        <div class="matrix-cell ${getRiskColorClass('High', 'Medium')}" onclick="showRisksInCell('High', 'Medium')">
                            <div class="cell-label">H/M</div>
                            <div class="cell-count">${matrix['High-Medium'].length}</div>
                            ${matrix['High-Medium'].length > 0 ? '<div class="cell-risks">' + matrix['High-Medium'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        <div class="matrix-cell ${getRiskColorClass('High', 'High')}" onclick="showRisksInCell('High', 'High')">
                            <div class="cell-label">H/H</div>
                            <div class="cell-count">${matrix['High-High'].length}</div>
                            ${matrix['High-High'].length > 0 ? '<div class="cell-risks">' + matrix['High-High'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        
                        <!-- Medium Likelihood Row -->
                        <div class="matrix-cell ${getRiskColorClass('Medium', 'Low')}" onclick="showRisksInCell('Medium', 'Low')">
                            <div class="cell-label">M/L</div>
                            <div class="cell-count">${matrix['Medium-Low'].length}</div>
                            ${matrix['Medium-Low'].length > 0 ? '<div class="cell-risks">' + matrix['Medium-Low'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        <div class="matrix-cell ${getRiskColorClass('Medium', 'Medium')}" onclick="showRisksInCell('Medium', 'Medium')">
                            <div class="cell-label">M/M</div>
                            <div class="cell-count">${matrix['Medium-Medium'].length}</div>
                            ${matrix['Medium-Medium'].length > 0 ? '<div class="cell-risks">' + matrix['Medium-Medium'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        <div class="matrix-cell ${getRiskColorClass('Medium', 'High')}" onclick="showRisksInCell('Medium', 'High')">
                            <div class="cell-label">M/H</div>
                            <div class="cell-count">${matrix['Medium-High'].length}</div>
                            ${matrix['Medium-High'].length > 0 ? '<div class="cell-risks">' + matrix['Medium-High'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        
                        <!-- Low Likelihood Row -->
                        <div class="matrix-cell ${getRiskColorClass('Low', 'Low')}" onclick="showRisksInCell('Low', 'Low')">
                            <div class="cell-label">L/L</div>
                            <div class="cell-count">${matrix['Low-Low'].length}</div>
                            ${matrix['Low-Low'].length > 0 ? '<div class="cell-risks">' + matrix['Low-Low'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        <div class="matrix-cell ${getRiskColorClass('Low', 'Medium')}" onclick="showRisksInCell('Low', 'Medium')">
                            <div class="cell-label">L/M</div>
                            <div class="cell-count">${matrix['Low-Medium'].length}</div>
                            ${matrix['Low-Medium'].length > 0 ? '<div class="cell-risks">' + matrix['Low-Medium'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                        <div class="matrix-cell ${getRiskColorClass('Low', 'High')}" onclick="showRisksInCell('Low', 'High')">
                            <div class="cell-label">L/H</div>
                            <div class="cell-count">${matrix['Low-High'].length}</div>
                            ${matrix['Low-High'].length > 0 ? '<div class="cell-risks">' + matrix['Low-High'].map(r => `<div class="risk-badge">${r.risk.substring(0, 20)}...</div>`).join('') + '</div>' : ''}
                        </div>
                    </div>
                    
                    <div class="matrix-x-axis">
                        <div class="x-label">Low</div>
                        <div class="x-label">Medium</div>
                        <div class="x-label">High</div>
                    </div>
                </div>
            </div>
            
            <div class="matrix-x-label">IMPACT</div>
            
            <div class="matrix-summary">
                <div class="summary-stat">
                    <span class="summary-label">Total Risks:</span>
                    <span class="summary-value">${riskAssessments.length}</span>
                </div>
                <div class="summary-stat">
                    <span class="summary-label">High Risk:</span>
                    <span class="summary-value summary-high">${Object.entries(matrix).filter(([key, val]) => calculateRiskLevel(key.split('-')[0], key.split('-')[1]).level === 'High' && val.length > 0).reduce((sum, [k, v]) => sum + v.length, 0)}</span>
                </div>
                <div class="summary-stat">
                    <span class="summary-label">Medium Risk:</span>
                    <span class="summary-value summary-medium">${Object.entries(matrix).filter(([key, val]) => calculateRiskLevel(key.split('-')[0], key.split('-')[1]).level === 'Medium' && val.length > 0).reduce((sum, [k, v]) => sum + v.length, 0)}</span>
                </div>
                <div class="summary-stat">
                    <span class="summary-label">Low Risk:</span>
                    <span class="summary-value summary-low">${Object.entries(matrix).filter(([key, val]) => calculateRiskLevel(key.split('-')[0], key.split('-')[1]).level === 'Low' && val.length > 0).reduce((sum, [k, v]) => sum + v.length, 0)}</span>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('riskMatrixContent').innerHTML = matrixHTML;
}

// Show risks in a specific matrix cell
function showRisksInCell(likelihood, impact) {
    const risks = riskAssessments.filter(r => r.likelihood === likelihood && r.impact === impact);
    
    if (risks.length === 0) {
        alert(`No risks found with Likelihood: ${likelihood} and Impact: ${impact}`);
        return;
    }
    
    const riskLevel = calculateRiskLevel(likelihood, impact);
    const riskList = risks.map(r => `• ${r.risk}`).join('\n');
    
    alert(`${riskLevel.level} Risk (${likelihood} Likelihood / ${impact} Impact)\n\nRisks in this cell:\n${riskList}\n\nClick on a risk below to view details.`);
    
    // Scroll to first matching risk
    const firstRiskElement = document.querySelector(`[data-risk-id="${risks[0].id}"]`);
    if (firstRiskElement) {
        firstRiskElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstRiskElement.style.animation = 'highlight 2s ease';
    }
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
    
    // Display risk matrix
    displayRiskMatrix();
    
    container.innerHTML = riskAssessments.map(assessment => {
        const riskLevel = calculateRiskLevel(assessment.likelihood, assessment.impact);
        const stats = getImplementationStats(assessment.controls);
        
        return `
            <div class="risk-assessment-card" data-risk-id="${assessment.id}">
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
