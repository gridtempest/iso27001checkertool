// Complete ISO 27001:2022 Controls Database - All 93 Controls

const controlsDatabase = [
    // ===== ORGANIZATIONAL CONTROLS (A.5) =====
    {
        id: 'A.5.1',
        title: 'Policies for information security',
        description: 'Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties, and reviewed at planned intervals and if significant changes occur.',
        category: 'Organizational Controls',
        keywords: ['policy', 'governance', 'documentation', 'management', 'framework'],
        relatedRisks: ['Lack of governance', 'Policy non-compliance', 'Unclear security direction']
    },
    {
        id: 'A.5.2',
        title: 'Information security roles and responsibilities',
        description: 'Information security roles and responsibilities shall be defined and allocated according to the organization needs.',
        category: 'Organizational Controls',
        keywords: ['roles', 'responsibilities', 'accountability', 'RACI', 'ownership'],
        relatedRisks: ['Unclear accountability', 'Security gaps', 'Role confusion']
    },
    {
        id: 'A.5.3',
        title: 'Segregation of duties',
        description: 'Conflicting duties and conflicting areas of responsibility shall be segregated.',
        category: 'Organizational Controls',
        keywords: ['segregation', 'separation of duties', 'fraud prevention', 'dual control'],
        relatedRisks: ['Fraud', 'Unauthorized changes', 'Insider threats']
    },
    {
        id: 'A.5.4',
        title: 'Management responsibilities',
        description: 'Management shall require all personnel to apply information security in accordance with the established information security policy, topic-specific policies and procedures of the organization.',
        category: 'Organizational Controls',
        keywords: ['management', 'leadership', 'enforcement', 'oversight'],
        relatedRisks: ['Lack of enforcement', 'Management neglect', 'Weak security culture']
    },
    {
        id: 'A.5.5',
        title: 'Contact with authorities',
        description: 'The organization shall establish and maintain contact with relevant authorities.',
        category: 'Organizational Controls',
        keywords: ['authorities', 'law enforcement', 'regulatory', 'government', 'police'],
        relatedRisks: ['Regulatory non-compliance', 'Legal issues', 'Poor incident response']
    },
    {
        id: 'A.5.6',
        title: 'Contact with special interest groups',
        description: 'The organization shall establish and maintain contact with special interest groups or other specialist security forums and professional associations.',
        category: 'Organizational Controls',
        keywords: ['community', 'forums', 'networking', 'industry groups', 'collaboration'],
        relatedRisks: ['Isolation', 'Missing threat intelligence', 'Lack of best practices']
    },
    {
        id: 'A.5.7',
        title: 'Threat intelligence',
        description: 'Information relating to information security threats shall be collected and analyzed to produce threat intelligence.',
        category: 'Organizational Controls',
        keywords: ['threat', 'intelligence', 'emerging threat', 'attack', 'threat landscape', 'CTI'],
        relatedRisks: ['Unknown threats', 'Advanced persistent threats', 'Emerging attacks']
    },
    {
        id: 'A.5.8',
        title: 'Information security in project management',
        description: 'Information security shall be integrated into project management.',
        category: 'Organizational Controls',
        keywords: ['project', 'SDLC', 'development', 'project management', 'security by design'],
        relatedRisks: ['Insecure projects', 'Security afterthought', 'Project vulnerabilities']
    },
    {
        id: 'A.5.9',
        title: 'Inventory of information and other associated assets',
        description: 'An inventory of information and other associated assets, including owners, shall be developed and maintained.',
        category: 'Organizational Controls',
        keywords: ['asset', 'inventory', 'tracking', 'CMDB', 'asset register'],
        relatedRisks: ['Asset loss', 'Unmanaged assets', 'Shadow IT']
    },
    {
        id: 'A.5.10',
        title: 'Acceptable use of information and other associated assets',
        description: 'Rules for the acceptable use and procedures for handling information and other associated assets shall be identified, documented and implemented.',
        category: 'Organizational Controls',
        keywords: ['acceptable use', 'AUP', 'email', 'internet', 'data sharing', 'misuse'],
        relatedRisks: ['Data leakage', 'Policy violation', 'Unauthorized sharing']
    },
    {
        id: 'A.5.11',
        title: 'Return of assets',
        description: 'Personnel and other interested parties as applicable shall return all of the organization\'s assets in their possession upon change or termination of their employment, contract or agreement.',
        category: 'Organizational Controls',
        keywords: ['return', 'termination', 'offboarding', 'asset recovery', 'exit'],
        relatedRisks: ['Asset retention', 'Data theft on exit', 'Unreturned equipment']
    },
    {
        id: 'A.5.12',
        title: 'Classification of information',
        description: 'Information shall be classified according to the information security needs of the organization based on confidentiality, integrity, availability and relevant interested party requirements.',
        category: 'Organizational Controls',
        keywords: ['classification', 'confidential', 'sensitive', 'data labeling', 'information value'],
        relatedRisks: ['Improper handling', 'Data exposure', 'Unclear sensitivity']
    },
    {
        id: 'A.5.13',
        title: 'Labelling of information',
        description: 'An appropriate set of procedures for information labelling shall be developed and implemented in accordance with the information classification scheme adopted by the organization.',
        category: 'Organizational Controls',
        keywords: ['labeling', 'marking', 'tags', 'classification labels', 'document marking'],
        relatedRisks: ['Unmarked sensitive data', 'Handling errors', 'Misclassification']
    },
    {
        id: 'A.5.14',
        title: 'Information transfer',
        description: 'Information transfer rules, procedures, or agreements shall be in place for all types of transfer facilities within the organization and between the organization and other parties.',
        category: 'Organizational Controls',
        keywords: ['transfer', 'transmission', 'sharing', 'data exchange', 'file sharing'],
        relatedRisks: ['Unauthorized transfer', 'Data interception', 'Insecure sharing']
    },
    {
        id: 'A.5.15',
        title: 'Access control',
        description: 'Rules to control physical and logical access to information and other associated assets shall be established and implemented based on business and information security requirements.',
        category: 'Organizational Controls',
        keywords: ['access control', 'authorization', 'permissions', 'access rules', 'control policy'],
        relatedRisks: ['Unauthorized access', 'Excessive privileges', 'Access violations']
    },
    {
        id: 'A.5.16',
        title: 'Identity management',
        description: 'The full life cycle of identities shall be managed.',
        category: 'Organizational Controls',
        keywords: ['identity', 'IAM', 'user accounts', 'identity lifecycle', 'provisioning'],
        relatedRisks: ['Orphaned accounts', 'Identity theft', 'Account mismanagement']
    },
    {
        id: 'A.5.17',
        title: 'Authentication information',
        description: 'Allocation and management of authentication information shall be controlled by a management process, including advising personnel on appropriate handling of authentication information.',
        category: 'Organizational Controls',
        keywords: ['authentication', 'credentials', 'password', 'login', 'MFA'],
        relatedRisks: ['Weak passwords', 'Credential theft', 'Shared accounts']
    },
    {
        id: 'A.5.18',
        title: 'Access rights',
        description: 'Access rights to information and other associated assets shall be provisioned, reviewed, modified and removed in accordance with the organization\'s topic-specific policy on and rules for access control.',
        category: 'Organizational Controls',
        keywords: ['access rights', 'permissions', 'provisioning', 'deprovisioning', 'access review'],
        relatedRisks: ['Privilege creep', 'Excessive access', 'Stale permissions']
    },
    {
        id: 'A.5.19',
        title: 'Information security in supplier relationships',
        description: 'Processes and procedures shall be defined and agreed with each supplier to manage the information security risks associated with supplier\'s access to the organization\'s assets.',
        category: 'Organizational Controls',
        keywords: ['supplier', 'vendor', 'third party', 'supply chain', 'contractor'],
        relatedRisks: ['Supplier breach', 'Third-party risk', 'Supply chain attack']
    },
    {
        id: 'A.5.20',
        title: 'Addressing information security within supplier agreements',
        description: 'Relevant information security requirements shall be established and agreed with each supplier based on the type of supplier relationship.',
        category: 'Organizational Controls',
        keywords: ['supplier agreement', 'contract', 'SLA', 'vendor management', 'agreements'],
        relatedRisks: ['Contractual breach', 'Supplier non-compliance', 'Unclear responsibilities']
    },
    {
        id: 'A.5.21',
        title: 'Managing information security in the ICT supply chain',
        description: 'Processes and procedures shall be defined and implemented to manage the information security risks associated with the ICT products and services supply chain.',
        category: 'Organizational Controls',
        keywords: ['supply chain', 'ICT', 'technology supplier', 'software supply chain'],
        relatedRisks: ['Supply chain compromise', 'Vendor breach', 'Compromised software']
    },
    {
        id: 'A.5.22',
        title: 'Monitoring, review and change management of supplier services',
        description: 'The organization shall regularly monitor, review, evaluate and manage change in supplier information security practices and service delivery.',
        category: 'Organizational Controls',
        keywords: ['monitoring', 'supplier review', 'vendor management', 'change management'],
        relatedRisks: ['Supplier degradation', 'Unmonitored suppliers', 'Service changes']
    },
    {
        id: 'A.5.23',
        title: 'Information security for use of cloud services',
        description: 'Processes for acquisition, use, management and exit from cloud services shall be established in accordance with the organization\'s information security requirements.',
        category: 'Organizational Controls',
        keywords: ['cloud', 'cloud services', 'SaaS', 'IaaS', 'PaaS', 'cloud security'],
        relatedRisks: ['Cloud misconfiguration', 'Data residency', 'Cloud breaches']
    },
    {
        id: 'A.5.24',
        title: 'Information security incident management planning and preparation',
        description: 'The organization shall plan and prepare for managing information security incidents by defining, establishing and communicating information security incident management processes, roles and responsibilities.',
        category: 'Organizational Controls',
        keywords: ['incident', 'incident management', 'incident response', 'IRP', 'preparation'],
        relatedRisks: ['Poor incident response', 'Unprepared teams', 'Incident chaos']
    },
    {
        id: 'A.5.25',
        title: 'Assessment and decision on information security events',
        description: 'The organization shall assess information security events and decide if they are to be categorized as information security incidents.',
        category: 'Organizational Controls',
        keywords: ['assessment', 'triage', 'event analysis', 'incident classification'],
        relatedRisks: ['Missed incidents', 'False positives', 'Poor triage']
    },
    {
        id: 'A.5.26',
        title: 'Response to information security incidents',
        description: 'Information security incidents shall be responded to in accordance with the documented procedures.',
        category: 'Organizational Controls',
        keywords: ['incident response', 'breach', 'containment', 'remediation', 'incident handling'],
        relatedRisks: ['Security incidents', 'Data breaches', 'Cyberattacks']
    },
    {
        id: 'A.5.27',
        title: 'Learning from information security incidents',
        description: 'Knowledge gained from information security incidents shall be used to strengthen and improve the information security controls.',
        category: 'Organizational Controls',
        keywords: ['lessons learned', 'post-mortem', 'incident review', 'improvement'],
        relatedRisks: ['Repeated incidents', 'No learning', 'Same vulnerabilities']
    },
    {
        id: 'A.5.28',
        title: 'Collection of evidence',
        description: 'The organization shall establish and implement procedures for the identification, collection, acquisition and preservation of evidence related to information security events.',
        category: 'Organizational Controls',
        keywords: ['evidence', 'forensics', 'chain of custody', 'investigation', 'digital evidence'],
        relatedRisks: ['Lost evidence', 'Inadmissible evidence', 'Poor investigation']
    },
    {
        id: 'A.5.29',
        title: 'Information security during disruption',
        description: 'The organization shall plan how to maintain information security at an appropriate level during disruption.',
        category: 'Organizational Controls',
        keywords: ['disruption', 'disaster', 'continuity', 'BCP', 'availability', 'disaster recovery'],
        relatedRisks: ['Service disruption', 'System unavailability', 'Disaster']
    },
    {
        id: 'A.5.30',
        title: 'ICT readiness for business continuity',
        description: 'ICT readiness shall be planned, implemented, maintained and tested based on business continuity objectives and ICT continuity requirements.',
        category: 'Organizational Controls',
        keywords: ['business continuity', 'DR', 'ICT readiness', 'continuity planning', 'resilience'],
        relatedRisks: ['System failure', 'Prolonged outages', 'Business interruption']
    },
    {
        id: 'A.5.31',
        title: 'Legal, statutory, regulatory and contractual requirements',
        description: 'Legal, statutory, regulatory and contractual requirements relevant to information security and the organization\'s approach to meet these requirements shall be identified, documented and kept up to date.',
        category: 'Organizational Controls',
        keywords: ['legal', 'compliance', 'regulatory', 'GDPR', 'statutory', 'contractual'],
        relatedRisks: ['Legal violations', 'Regulatory fines', 'Non-compliance']
    },
    {
        id: 'A.5.32',
        title: 'Intellectual property rights',
        description: 'The organization shall implement appropriate procedures to protect intellectual property rights.',
        category: 'Organizational Controls',
        keywords: ['intellectual property', 'IP', 'copyright', 'patents', 'licensing'],
        relatedRisks: ['IP theft', 'License violations', 'Copyright infringement']
    },
    {
        id: 'A.5.33',
        title: 'Protection of records',
        description: 'Records shall be protected from loss, destruction, falsification, unauthorized access and unauthorized release.',
        category: 'Organizational Controls',
        keywords: ['records', 'retention', 'archiving', 'document management', 'records protection'],
        relatedRisks: ['Record loss', 'Records tampering', 'Retention violations']
    },
    {
        id: 'A.5.34',
        title: 'Privacy and protection of PII',
        description: 'The organization shall identify and meet the requirements regarding the preservation of privacy and protection of PII according to applicable laws and regulations and contractual requirements.',
        category: 'Organizational Controls',
        keywords: ['privacy', 'PII', 'personal data', 'GDPR', 'data protection', 'personally identifiable'],
        relatedRisks: ['Privacy violations', 'PII exposure', 'GDPR breaches']
    },
    {
        id: 'A.5.35',
        title: 'Independent review of information security',
        description: 'The organization\'s approach to managing information security and its implementation including people, processes and technologies shall be reviewed independently at planned intervals, or when significant changes occur.',
        category: 'Organizational Controls',
        keywords: ['audit', 'review', 'independent assessment', 'security audit', 'compliance audit'],
        relatedRisks: ['Undetected weaknesses', 'Compliance gaps', 'No validation']
    },
    {
        id: 'A.5.36',
        title: 'Compliance with policies, rules and standards for information security',
        description: 'Compliance with the organization\'s information security policy, topic-specific policies, rules and standards shall be regularly reviewed.',
        category: 'Organizational Controls',
        keywords: ['compliance', 'policy compliance', 'adherence', 'compliance monitoring'],
        relatedRisks: ['Policy violations', 'Non-compliance', 'Standard deviations']
    },
    {
        id: 'A.5.37',
        title: 'Documented operating procedures',
        description: 'Operating procedures for information processing facilities shall be documented and made available to personnel who need them.',
        category: 'Organizational Controls',
        keywords: ['procedures', 'documentation', 'operating procedures', 'SOPs', 'runbooks'],
        relatedRisks: ['Operational errors', 'Inconsistent processes', 'Knowledge loss']
    },

    // ===== PEOPLE CONTROLS (A.6) =====
    {
        id: 'A.6.1',
        title: 'Screening',
        description: 'Background verification checks on all candidates to become personnel shall be carried out prior to joining the organization and on an ongoing basis taking into consideration applicable laws, regulations and ethics and be proportional to the business requirements, the classification of the information to be accessed and the perceived risks.',
        category: 'People Controls',
        keywords: ['screening', 'background check', 'vetting', 'hiring', 'verification'],
        relatedRisks: ['Insider threats', 'Malicious hiring', 'Unverified personnel']
    },
    {
        id: 'A.6.2',
        title: 'Terms and conditions of employment',
        description: 'The employment contractual agreements shall state the personnel\'s and the organization\'s responsibilities for information security.',
        category: 'People Controls',
        keywords: ['employment', 'contract', 'terms', 'NDA', 'employment agreement'],
        relatedRisks: ['Unclear responsibilities', 'Contractual disputes', 'Security gaps']
    },
    {
        id: 'A.6.3',
        title: 'Information security awareness, education and training',
        description: 'Personnel of the organization and relevant interested parties shall receive appropriate information security awareness, education and training and regular updates of the organization\'s information security policy, topic-specific policies and procedures, as relevant for their job function.',
        category: 'People Controls',
        keywords: ['training', 'awareness', 'education', 'phishing', 'social engineering', 'security training'],
        relatedRisks: ['Phishing attacks', 'Social engineering', 'User errors', 'Lack of awareness']
    },
    {
        id: 'A.6.4',
        title: 'Disciplinary process',
        description: 'A disciplinary process shall be formalized and communicated to take actions against personnel and other relevant interested parties who have committed an information security policy violation.',
        category: 'People Controls',
        keywords: ['disciplinary', 'sanctions', 'enforcement', 'violations', 'consequences'],
        relatedRisks: ['Repeated violations', 'No deterrence', 'Policy breaches']
    },
    {
        id: 'A.6.5',
        title: 'Responsibilities after termination or change of employment',
        description: 'Information security responsibilities and duties that remain valid after termination or change of employment shall be defined, enforced and communicated to relevant personnel and other interested parties.',
        category: 'People Controls',
        keywords: ['termination', 'offboarding', 'exit', 'post-employment', 'separation'],
        relatedRisks: ['Post-exit data theft', 'Retained access', 'Former employee risks']
    },
    {
        id: 'A.6.6',
        title: 'Confidentiality or non-disclosure agreements',
        description: 'Confidentiality or non-disclosure agreements reflecting the organization\'s needs for the protection of information shall be identified, documented, regularly reviewed and signed by personnel and other relevant interested parties.',
        category: 'People Controls',
        keywords: ['NDA', 'confidentiality', 'non-disclosure', 'confidential agreement'],
        relatedRisks: ['Information leaks', 'Trade secret loss', 'Unauthorized disclosure']
    },
    {
        id: 'A.6.7',
        title: 'Remote working',
        description: 'Security measures shall be implemented when personnel are working remotely to protect information accessed, processed or stored outside the organization\'s premises.',
        category: 'People Controls',
        keywords: ['remote work', 'telework', 'home office', 'remote access', 'work from home'],
        relatedRisks: ['Remote access breaches', 'Insecure home networks', 'Remote data loss']
    },
    {
        id: 'A.6.8',
        title: 'Information security event reporting',
        description: 'The organization shall provide a mechanism for personnel to report observed or suspected information security events through appropriate channels in a timely manner.',
        category: 'People Controls',
        keywords: ['reporting', 'incident reporting', 'security events', 'whistleblowing'],
        relatedRisks: ['Unreported incidents', 'Delayed response', 'Hidden breaches']
    },

    // ===== PHYSICAL CONTROLS (A.7) =====
    {
        id: 'A.7.1',
        title: 'Physical security perimeters',
        description: 'Physical security perimeters shall be defined and used to protect areas that contain information and other associated assets.',
        category: 'Physical Controls',
        keywords: ['perimeter', 'physical security', 'building', 'facility', 'boundary'],
        relatedRisks: ['Physical intrusion', 'Unauthorized physical access', 'Facility breach']
    },
    {
        id: 'A.7.2',
        title: 'Physical entry',
        description: 'Secure areas shall be protected by appropriate entry controls and access points.',
        category: 'Physical Controls',
        keywords: ['entry', 'access control', 'badge', 'ID card', 'physical access', 'door'],
        relatedRisks: ['Tailgating', 'Unauthorized entry', 'Physical breach']
    },
    {
        id: 'A.7.3',
        title: 'Securing offices, rooms and facilities',
        description: 'Physical security for offices, rooms and facilities shall be designed and implemented.',
        category: 'Physical Controls',
        keywords: ['office security', 'room security', 'facility', 'secure areas'],
        relatedRisks: ['Office intrusion', 'Unsecured facilities', 'Room breaches']
    },
    {
        id: 'A.7.4',
        title: 'Physical security monitoring',
        description: 'Premises shall be continuously monitored for unauthorized physical access.',
        category: 'Physical Controls',
        keywords: ['monitoring', 'CCTV', 'surveillance', 'cameras', 'security monitoring'],
        relatedRisks: ['Undetected intrusion', 'Physical breach', 'No surveillance']
    },
    {
        id: 'A.7.5',
        title: 'Protecting against physical and environmental threats',
        description: 'Protection against physical and environmental threats, such as natural disasters and other intentional or unintentional physical threats to infrastructure shall be designed and implemented.',
        category: 'Physical Controls',
        keywords: ['environmental', 'natural disaster', 'fire', 'flood', 'physical threats'],
        relatedRisks: ['Natural disasters', 'Environmental damage', 'Physical damage']
    },
    {
        id: 'A.7.6',
        title: 'Working in secure areas',
        description: 'Security measures for working in secure areas shall be designed and implemented.',
        category: 'Physical Controls',
        keywords: ['secure areas', 'restricted areas', 'secure working', 'controlled areas'],
        relatedRisks: ['Unauthorized observation', 'Secure area violations', 'Data exposure']
    },
    {
        id: 'A.7.7',
        title: 'Clear desk and clear screen',
        description: 'Clear desk rules for papers and removable storage media and clear screen rules for information processing facilities shall be defined and appropriately enforced.',
        category: 'Physical Controls',
        keywords: ['clear desk', 'clean desk', 'screen lock', 'unattended', 'workspace security'],
        relatedRisks: ['Device theft', 'Data exposure', 'Visual hacking']
    },
    {
        id: 'A.7.8',
        title: 'Equipment siting and protection',
        description: 'Equipment shall be sited securely and protected.',
        category: 'Physical Controls',
        keywords: ['equipment', 'hardware', 'servers', 'placement', 'protection'],
        relatedRisks: ['Equipment damage', 'Hardware theft', 'Physical tampering']
    },
    {
        id: 'A.7.9',
        title: 'Security of assets off-premises',
        description: 'Off-site assets shall be protected.',
        category: 'Physical Controls',
        keywords: ['off-site', 'remote assets', 'mobile devices', 'external assets'],
        relatedRisks: ['Off-site theft', 'Remote asset loss', 'External breaches']
    },
    {
        id: 'A.7.10',
        title: 'Storage media',
        description: 'Storage media shall be managed through their life cycle of acquisition, use, transportation and disposal in accordance with the organization\'s classification scheme and handling requirements.',
        category: 'Physical Controls',
        keywords: ['storage media', 'USB', 'hard drive', 'media management', 'disposal'],
        relatedRisks: ['Media loss', 'Improper disposal', 'Data remnants']
    },
    {
        id: 'A.7.11',
        title: 'Supporting utilities',
        description: 'Information processing facilities shall be protected from power failures and other disruptions caused by failures in supporting utilities.',
        category: 'Physical Controls',
        keywords: ['utilities', 'power', 'UPS', 'electricity', 'infrastructure'],
        relatedRisks: ['Power outages', 'Utility failures', 'Service disruption']
    },
    {
        id: 'A.7.12',
        title: 'Cabling security',
        description: 'Cables carrying power, data or supporting information services shall be protected from interception, interference or damage.',
        category: 'Physical Controls',
        keywords: ['cabling', 'network cables', 'wiring', 'cable protection'],
        relatedRisks: ['Cable tampering', 'Network interception', 'Physical eavesdropping']
    },
    {
        id: 'A.7.13',
        title: 'Equipment maintenance',
        description: 'Equipment shall be maintained correctly to ensure availability, integrity and confidentiality of information.',
        category: 'Physical Controls',
        keywords: ['maintenance', 'servicing', 'equipment care', 'repairs'],
        relatedRisks: ['Equipment failure', 'Poor maintenance', 'Hardware issues']
    },
    {
        id: 'A.7.14',
        title: 'Secure disposal or re-use of equipment',
        description: 'Items of equipment containing storage media shall be verified to ensure that any sensitive data and licensed software has been removed or securely overwritten prior to disposal or re-use.',
        category: 'Physical Controls',
        keywords: ['disposal', 'sanitization', 'decommissioning', 'equipment disposal', 'data wiping'],
        relatedRisks: ['Data remnants', 'Improper disposal', 'Information leakage']
    },

    // ===== TECHNOLOGICAL CONTROLS (A.8) =====
    {
        id: 'A.8.1',
        title: 'User endpoint devices',
        description: 'Information stored on, processed by or accessible via user endpoint devices shall be protected.',
        category: 'Technological Controls',
        keywords: ['endpoint', 'laptop', 'device', 'workstation', 'mobile', 'BYOD'],
        relatedRisks: ['Device compromise', 'Endpoint attack', 'Lost device', 'Stolen laptop']
    },
    {
        id: 'A.8.2',
        title: 'Privileged access rights',
        description: 'The allocation and use of privileged access rights shall be restricted and managed.',
        category: 'Technological Controls',
        keywords: ['privileged', 'admin', 'administrator', 'elevated', 'root', 'sudo'],
        relatedRisks: ['Privilege abuse', 'Unauthorized access', 'Admin misuse']
    },
    {
        id: 'A.8.3',
        title: 'Information access restriction',
        description: 'Access to information and other associated assets shall be restricted in accordance with the established topic-specific policy on access control.',
        category: 'Technological Controls',
        keywords: ['access control', 'permissions', 'authorization', 'least privilege', 'access restriction'],
        relatedRisks: ['Unauthorized data access', 'Data breach', 'Access violations']
    },
    {
        id: 'A.8.4',
        title: 'Access to source code',
        description: 'Read and write access to source code, development tools and software libraries shall be appropriately managed.',
        category: 'Technological Controls',
        keywords: ['source code', 'code repository', 'development', 'git', 'version control'],
        relatedRisks: ['Code theft', 'Unauthorized code changes', 'IP theft']
    },
    {
        id: 'A.8.5',
        title: 'Secure authentication',
        description: 'Secure authentication technologies and procedures shall be implemented based on information access restrictions and the topic-specific policy on access control.',
        category: 'Technological Controls',
        keywords: ['authentication', 'MFA', 'two-factor', 'biometric', 'SSO'],
        relatedRisks: ['Weak authentication', 'Credential compromise', 'Authentication bypass']
    },
    {
        id: 'A.8.6',
        title: 'Capacity management',
        description: 'The use of resources shall be monitored and adjusted in line with current and expected capacity requirements.',
        category: 'Technological Controls',
        keywords: ['capacity', 'performance', 'resources', 'scalability', 'monitoring'],
        relatedRisks: ['Performance degradation', 'Resource exhaustion', 'Service unavailability']
    },
    {
        id: 'A.8.7',
        title: 'Protection against malware',
        description: 'Protection against malware shall be implemented and supported by appropriate user awareness.',
        category: 'Technological Controls',
        keywords: ['malware', 'virus', 'ransomware', 'trojan', 'antivirus', 'malicious code'],
        relatedRisks: ['Malware infection', 'Ransomware attack', 'Virus outbreak']
    },
    {
        id: 'A.8.8',
        title: 'Management of technical vulnerabilities',
        description: 'Information about technical vulnerabilities of information systems in use shall be obtained, the organization\'s exposure to such vulnerabilities evaluated and appropriate measures taken.',
        category: 'Technological Controls',
        keywords: ['vulnerability', 'patch', 'update', 'exploit', 'CVE', 'vulnerability management'],
        relatedRisks: ['Unpatched systems', 'Vulnerability exploitation', 'Zero-day attacks']
    },
    {
        id: 'A.8.9',
        title: 'Configuration management',
        description: 'Configurations, including security configurations, of hardware, software, services and networks shall be established, documented, implemented, monitored and reviewed.',
        category: 'Technological Controls',
        keywords: ['configuration', 'misconfiguration', 'settings', 'baseline', 'hardening'],
        relatedRisks: ['Misconfiguration', 'Configuration drift', 'Insecure settings']
    },
    {
        id: 'A.8.10',
        title: 'Information deletion',
        description: 'Information stored in information systems, devices or in any other storage media shall be deleted when no longer required.',
        category: 'Technological Controls',
        keywords: ['deletion', 'data removal', 'sanitization', 'secure deletion', 'data erasure'],
        relatedRisks: ['Data retention', 'Storage of unnecessary data', 'Compliance violations']
    },
    {
        id: 'A.8.11',
        title: 'Data masking',
        description: 'Data masking shall be used in accordance with the organization\'s topic-specific policy on access control and other related topic-specific policies, and business requirements, taking applicable legislation into consideration.',
        category: 'Technological Controls',
        keywords: ['data masking', 'obfuscation', 'anonymization', 'redaction', 'tokenization'],
        relatedRisks: ['Data exposure in testing', 'Privacy violations', 'Unnecessary data access']
    },
    {
        id: 'A.8.12',
        title: 'Data leakage prevention',
        description: 'Data leakage prevention measures shall be applied to systems, networks and any other devices that process, store or transmit sensitive information.',
        category: 'Technological Controls',
        keywords: ['DLP', 'data leakage', 'data loss prevention', 'exfiltration', 'data protection'],
        relatedRisks: ['Data exfiltration', 'Information leakage', 'Data theft']
    },
    {
        id: 'A.8.13',
        title: 'Information backup',
        description: 'Backup copies of information, software and systems shall be maintained and regularly tested in accordance with the agreed topic-specific policy on backup.',
        category: 'Technological Controls',
        keywords: ['backup', 'recovery', 'restore', 'data backup', 'disaster recovery'],
        relatedRisks: ['Data loss', 'Ransomware', 'System failure', 'Backup failure']
    },
    {
        id: 'A.8.14',
        title: 'Redundancy of information processing facilities',
        description: 'Information processing facilities shall be implemented with redundancy sufficient to meet availability requirements.',
        category: 'Technological Controls',
        keywords: ['redundancy', 'high availability', 'failover', 'clustering', 'replication'],
        relatedRisks: ['Single point of failure', 'Service outages', 'Availability loss']
    },
    {
        id: 'A.8.15',
        title: 'Logging',
        description: 'Logs that record activities, exceptions, faults and other relevant events shall be produced, stored, protected and analyzed.',
        category: 'Technological Controls',
        keywords: ['logging', 'audit logs', 'event logs', 'log management', 'log files'],
        relatedRisks: ['No audit trail', 'Incident investigation difficulties', 'Compliance gaps']
    },
    {
        id: 'A.8.16',
        title: 'Monitoring activities',
        description: 'Networks, systems and applications shall be monitored for anomalous behaviour and appropriate action taken to evaluate potential information security incidents.',
        category: 'Technological Controls',
        keywords: ['monitoring', 'SIEM', 'detection', 'anomaly', 'security monitoring'],
        relatedRisks: ['Undetected intrusion', 'Security incidents', 'Breach detection delays']
    },
    {
        id: 'A.8.17',
        title: 'Clock synchronization',
        description: 'The clocks of information processing systems used by the organization shall be synchronized to approved time sources.',
        category: 'Technological Controls',
        keywords: ['time', 'NTP', 'clock sync', 'time synchronization', 'timestamp'],
        relatedRisks: ['Inaccurate logs', 'Forensic difficulties', 'Correlation problems']
    },
    {
        id: 'A.8.18',
        title: 'Use of privileged utility programs',
        description: 'The use of utility programs that can be capable of overriding system and application controls shall be restricted and tightly controlled.',
        category: 'Technological Controls',
        keywords: ['utility programs', 'system tools', 'administrative tools', 'privileged utilities'],
        relatedRisks: ['Control bypass', 'System manipulation', 'Unauthorized changes']
    },
    {
        id: 'A.8.19',
        title: 'Installation of software on operational systems',
        description: 'Procedures and measures shall be implemented to securely manage software installation on operational systems.',
        category: 'Technological Controls',
        keywords: ['software installation', 'change control', 'software deployment', 'application installation'],
        relatedRisks: ['Unauthorized software', 'Malicious installations', 'System instability']
    },
    {
        id: 'A.8.20',
        title: 'Networks security',
        description: 'Networks and network devices shall be secured, managed and controlled to protect information in systems and applications.',
        category: 'Technological Controls',
        keywords: ['network security', 'network segmentation', 'firewall', 'network controls'],
        relatedRisks: ['Network attacks', 'Lateral movement', 'Network breaches']
    },
    {
        id: 'A.8.21',
        title: 'Security of network services',
        description: 'Security mechanisms, service levels and service requirements of network services shall be identified, implemented and monitored.',
        category: 'Technological Controls',
        keywords: ['network services', 'service security', 'network protocols', 'service hardening'],
        relatedRisks: ['Insecure services', 'Service vulnerabilities', 'Network exploitation']
    },
    {
        id: 'A.8.22',
        title: 'Segregation of networks',
        description: 'Groups of information services, users and information systems shall be segregated in the organization\'s networks.',
        category: 'Technological Controls',
        keywords: ['network segregation', 'segmentation', 'VLAN', 'network isolation', 'microsegmentation'],
        relatedRisks: ['Lateral movement', 'Network-wide compromise', 'Unauthorized access']
    },
    {
        id: 'A.8.23',
        title: 'Web filtering',
        description: 'Access to external websites shall be managed to reduce exposure to malicious content.',
        category: 'Technological Controls',
        keywords: ['web filtering', 'content filtering', 'internet filter', 'URL filtering', 'web gateway'],
        relatedRisks: ['Phishing websites', 'Malicious downloads', 'Web-based attacks']
    },
    {
        id: 'A.8.24',
        title: 'Use of cryptography',
        description: 'Rules for the effective use of cryptography, including cryptographic key management, shall be defined and implemented.',
        category: 'Technological Controls',
        keywords: ['encryption', 'cryptography', 'crypto', 'TLS', 'SSL', 'key management'],
        relatedRisks: ['Data interception', 'Unencrypted data', 'Man-in-the-middle']
    },
    {
        id: 'A.8.25',
        title: 'Secure development life cycle',
        description: 'Rules for the secure development of software and systems shall be established and applied.',
        category: 'Technological Controls',
        keywords: ['SDLC', 'secure development', 'DevSecOps', 'secure coding', 'development security'],
        relatedRisks: ['Insecure software', 'Code vulnerabilities', 'Development flaws']
    },
    {
        id: 'A.8.26',
        title: 'Application security requirements',
        description: 'Information security requirements shall be identified, specified and approved when developing or acquiring applications.',
        category: 'Technological Controls',
        keywords: ['application security', 'security requirements', 'application development', 'software security'],
        relatedRisks: ['Insecure applications', 'Missing security features', 'Application vulnerabilities']
    },
    {
        id: 'A.8.27',
        title: 'Secure system architecture and engineering principles',
        description: 'Principles for engineering secure systems shall be established, documented, maintained and applied to any information system development activities.',
        category: 'Technological Controls',
        keywords: ['architecture', 'system design', 'security architecture', 'engineering principles'],
        relatedRisks: ['Poor architecture', 'Design flaws', 'Insecure systems']
    },
    {
        id: 'A.8.28',
        title: 'Secure coding',
        description: 'Secure coding principles shall be applied to software development.',
        category: 'Technological Controls',
        keywords: ['secure coding', 'code security', 'OWASP', 'coding standards', 'code review'],
        relatedRisks: ['Code vulnerabilities', 'Injection attacks', 'Code defects']
    },
    {
        id: 'A.8.29',
        title: 'Security testing in development and acceptance',
        description: 'Security testing processes shall be defined and implemented in the development life cycle.',
        category: 'Technological Controls',
        keywords: ['security testing', 'penetration testing', 'SAST', 'DAST', 'vulnerability testing'],
        relatedRisks: ['Untested security', 'Undetected vulnerabilities', 'Production bugs']
    },
    {
        id: 'A.8.30',
        title: 'Outsourced development',
        description: 'The organization shall direct, monitor and review the activities related to outsourced system development.',
        category: 'Technological Controls',
        keywords: ['outsourced development', 'third-party development', 'vendor code', 'external developers'],
        relatedRisks: ['Insecure third-party code', 'Vendor vulnerabilities', 'Supply chain risks']
    },
    {
        id: 'A.8.31',
        title: 'Separation of development, test and production environments',
        description: 'Development, testing and production environments shall be separated and secured.',
        category: 'Technological Controls',
        keywords: ['environment separation', 'dev test prod', 'environment isolation', 'staging'],
        relatedRisks: ['Production contamination', 'Test data in production', 'Environment confusion']
    },
    {
        id: 'A.8.32',
        title: 'Change management',
        description: 'Changes to information processing facilities and information systems shall be subject to change management procedures.',
        category: 'Technological Controls',
        keywords: ['change management', 'change control', 'CAB', 'change process', 'ITIL'],
        relatedRisks: ['Unauthorized changes', 'System instability', 'Change-related outages']
    },
    {
        id: 'A.8.33',
        title: 'Test information',
        description: 'Test information shall be appropriately selected, protected and managed.',
        category: 'Technological Controls',
        keywords: ['test data', 'testing', 'test environment', 'test information', 'QA'],
        relatedRisks: ['Production data in test', 'Test data exposure', 'Privacy violations']
    },
    {
        id: 'A.8.34',
        title: 'Protection of information systems during audit testing',
        description: 'Audit tests and other assurance activities involving assessment of operational systems shall be planned and agreed between the tester and appropriate management.',
        category: 'Technological Controls',
        keywords: ['audit', 'penetration testing', 'security assessment', 'audit testing'],
        relatedRisks: ['Audit disruption', 'Testing damage', 'Production impact']
    }
];

// Predefined risk examples
const predefinedRisks = [
    'Phishing email attack',
    'Lost or stolen laptop',
    'Unauthorized access to student records',
    'Ransomware attack',
    'Supplier data breach',
    'Weak passwords',
    'Unpatched systems',
    'Physical tailgating',
    'Insider threat',
    'Data leakage through email',
    'Misconfigured cloud services',
    'DDoS attack',
    'SQL injection vulnerability',
    'Inadequate backup procedures',
    'Poor incident response'
];