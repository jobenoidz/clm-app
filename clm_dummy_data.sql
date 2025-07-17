START TRANSACTION;
-- Insert users (keeping original column names)
INSERT INTO users (name, email, password, user_type) VALUES
('Admin User', 'admin@clm.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '1'),
('Sales Manager', 'sales@clm.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '2'),
('Account Manager', 'account@clm.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '3'),
('Sales Rep 1', 'rep1@clm.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '4'),
('Sales Rep 2', 'rep2@clm.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', '4');

-- Insert contacts (keeping original column names)

INSERT INTO contact (full_name, work_email, work_phone, position) VALUES
-- clients
('Jhon Kiervy B. Sison', 'jksison.brightmind.edu.ph', '+63 917 223 1144', 'Curriculum Director'),
('A-jay DC. Agulto', 'ajagulto@geniuslink.org', '+63 2 8891 5566', 'IT Systems Manager'),
('Angelo S. Ramos', 'asramos@smartstartschool.com', '+63 905 667 7712', 'School Admin Officer'),
('Chanchan C. Maloles', 'ccmaloles@learnpath.edu.ph', '+63 2 8810 3344', 'ICT Coordinator'),
('Nathaniel S. Bagtas', 'nsbagtas@northskyprep.org', '+63 926 887 5519', 'Academic Head'),
('John Angelo A. Fernandez', 'jafernadez@eduvision.ph', '+63 995 883 7733', 'Technology Consultant'),
('Hugo J. Biscocho', 'hjbiscocho@futureschool.ph', '+63 917 209 3388', 'Administrative Assistant'),
('Luis Gavin B. Bautista', 'lgbautista@techacademy.ph', '+63 917 809 1147', 'EdTech Supervisor'),
('Drew M. Morales', 'dmmorales@saintmarie.edu', '+63 936 442 1182', 'Registrar'),
('Rafael T. Feliciano', 'rtfeliciano@greenstep.org', '+63 915 230 5510', 'Learning Development Lead'),
-- leads
('Ashyel Feie M. Briones', 'afbriones@edutechnova.com', '+63 917 345 2231', 'CTO'),
('Carlo D. Mendoza', 'cdmendoza@learnfinity.io', '+63 2 8421 5543', 'Head of Innovation'),
('Daniel C. Reyes', 'dcreyes@brainbit.ph', '+63 999 661 8842', 'Procurement Officer'),
('Cristine C. Domingo', 'ccdomingo@nextgenlearn.com', '+63 920 898 7711', 'Managing Director'),
('Raymundo T. Feliciano', 'rtfeliciano@techwiseacademy.edu', '+63 917 100 7789', 'IT Director'),
('Carlos Miguel A. Espineda', 'caespineda@futurelearns.ph', '+63 917 992 6678', 'Education Technology Lead'),
('Paul M. Mendoza', 'pmmendoza@brightcore.tech', '+63 2 7725 8800', 'Product Development Head'),
('John Lester A. Amita', 'jlamita@academia360.com', '+63 906 321 7745', 'CEO'),
('Amiel O. Nagapangit', 'aonagapangit@stemroots.org', '+63 917 557 8843', 'Program Director'),
('Paul Laurence R. Durapan', 'pldurupan@eduwiseglobal.com', '+63 2 8282 1123', 'VP for Operations');

-- Insert companies (keeping original column names)
INSERT INTO company (company_name, address, type, contact_id) VALUES
-- clients
('BrightMind Academy', '45 Emerald Ave, Ortigas, Pasig City', 1, 1),
('GeniusLink Learning Center', 'Sikatuna Village, Quezon City', 1, 2),
('SmartStart School', 'Davao City Proper, Davao', 1, 3),
('LearnPath High School', 'Lahug, Cebu City', 1, 4),
('NorthSky Preparatory School', 'Marikina Heights, Marikina City', 1, 5),
('EduVision International', 'Mandurriao, Iloilo City', 1, 6),
('Future School for Innovators', 'Araneta Ave, Quezon City', 1, 7),
('Tech Academy of the Philippines', 'Legazpi Village, Makati City', 1, 8),
('Saint Marie Catholic School', 'Tayabas City, Quezon', 1, 9),
('GreenStep Learning Institute', 'Banilad, Dumaguete', 1, 10),
-- leads
('EduTechNova Solutions Inc.', '12F Cyber Sigma Bldg, Taguig, Metro Manila', 2, 11),
('Learnfinity Technologies', '8th Ave, Bonifacio Global City, Taguig', 2, 12),
('BrainBit Edutech Corporation', '16 Jupiter St, Makati, Metro Manila', 2, 13),
('NextGen Learning Hub', '21F Rockwell Business Center, Pasig', 2, 14),
('TechWise Academy', 'Unit 903, Eastwood City Cyberpark, QC', 2, 15),
('FutureLearns Inc.', 'Greenfield District, Mandaluyong City', 2, 16),
('BrightCore Technologies', 'Northgate Cyberzone, Alabang, Muntinlupa', 2, 17),
('Academia360 Edtech Solutions', 'Cebu I.T. Park, Cebu City', 2, 18),
('STEMRoots Foundation', 'Lipa City, Batangas', 2, 19),
('EduWise Global Solutions', 'Robinsons Cyberscape, Ortigas, Pasig City', 2, 20);


-- Insert clients (keeping original column names)
INSERT INTO client (company_id, date_added, organization, org_head, school_head, head_email, category) VALUES
(1, '2025-07-02', 'BrightMind Academy', 'Prof. Ramon Sy', 'Dr. Lydia Ramos', 'lramos@brightmind.edu.ph', 'K-12 Education'),
(2, '2025-07-01', NULL,  NULL, 'Ms. Joyce Encarnacion', 'jencarnacion@geniuslink.org', 'Alternative Learning'),
(3, '2025-06-30', 'SmartStart School', 'Engr. Carla Yu', 'Dr. Neil Samson', 'nsamson@smartstartschool.com', 'Preschool-Elementary'),
(4, '2025-07-02', 'LearnPath High School', 'Mrs. Juliana Abad', 'Mr. Eric Gutierrez', 'egutierrez@learnpath.edu.ph', 'Junior High'),
(5, '2025-06-28', NULL,  NULL, 'Ms. Jean G. Ortega', 'jortega@northskyprep.org', 'Senior High School'),
(6, '2025-07-02', 'EduVision International', 'Dr. Amelia Lao', 'Mr. Jorge Villafuerte', 'jv@eduvision.ph', 'International School'),
(7, '2025-06-27', NULL,  NULL, 'Mr. Michael Chua', 'mchua@futureschool.ph', 'STEM-Focused School'),
(8, '2025-07-01', 'Tech Academy of the Philippines', 'Dr. Francis Co', 'Ms. Rachel Dela Peña', 'rdelapena@techacademy.ph', 'Technology and VocTech'),
(9, '2025-06-29', NULL,  NULL, 'Ms. Anna Luz Mercado', 'almercado@saintmarie.edu', 'Faith-based School'),
(10, '2025-07-02', 'GreenStep Learning Institute', 'Dr. Maribel Enriquez', 'Mr. Allan Fortunato', 'afortunato@greenstep.org', 'Environmental Learning');

-- Insert lead statuses (keeping original column names)
INSERT INTO lead_status (status_name, description) VALUES
('New', 'Newly identified potential client'),
('Contacted', 'Initial contact made with the lead'),
('For Follow-up', '# days passed after initial contact'),
('Interested', 'Lead has replied and expressed interest'),
('Converted', 'Lead successfully converted to client'),
('Rejected', 'Responded with no interest'),
('Lost', 'No response at all');

-- Insert lead info (keeping original column names)
INSERT INTO `lead` (
    company_id, 
    date_added, 
    rt_date, 
    assigned_to, 
    status,
    recommended_services, 
    key_decision_maker, 
    challenges, 
    remarks, 
    needs_or_requirements, 
    domain, 
    timeline, 
    lead_source, 
    initial_contact_date, 
    last_contacted, 
    notes,
    created_at,
    updated_at
) VALUES
(11, '2025-07-01', '2025-06-27', NULL, 1, 'Smart Classroom Setup', 'School Board Committee', 'Outdated teaching tools and lack of student engagement', 'Recommend transitioning to a hybrid smart classroom model', 'Needs IoT-based learning tools, LMS integration', 'www.edutechnova.com', 'Q4 2025', 'Event: EduTech Summit', '2025-06-25', '2025-07-01', 'Interested in demo; follow up with proposal and sample integration timeline', NOW(), NOW()),
(12, '2025-06-28', '2025-06-20', NULL, 2, 'Custom LMS Development', 'Chief Academic Officer', 'Current LMS is slow and lacks analytics', 'Suggest a scalable cloud-based LMS with reporting tools', 'Wants mobile-friendly platform and AI-driven assessments', 'www.learnfinity.io', 'Q3 2025', 'Website Inquiry', '2025-06-21', '2025-06-30', 'Looking for enterprise solution. Budget approval expected in next quarter.', NOW(), NOW()),
(13, '2025-06-25', '2025-06-18', NULL, 3, 'EdTech Device Supply (tablets, AR)', 'Director of Technology', 'Budget constraints, supply chain delays', 'Recommend phased purchase with leasing options', 'Needs 200 tablets and 15 AR headsets', 'www.brainbit.ph', '6 months', 'Referral', '2025-06-19', '2025-06-25', 'Preparing internal cost-benefit presentation; requested sample unit delivery', NOW(), NOW()),
(14, '2025-07-02', '2025-06-29', NULL, 3, 'AI-Powered Assessment System', 'Dean of Instruction', 'Manual grading is time-consuming', 'Propose AI-powered quiz and feedback engine', 'Needs real-time feedback for online learning', 'www.nextgenlearn.com', '2 months', 'Cold Email Campaign', '2025-06-30', '2025-07-02', 'Open to pilot program in two subjects by August; prefers integration with Google Classroom', NOW(), NOW()),
(15, '2025-06-26', '2025-06-22', NULL, 2, 'Full School Digitalization Package', 'Superintendent', 'Legacy systems with no centralized control', 'Recommend cloud-based school management system', 'Needs student portal, grading, finance, and attendance', 'www.techwiseacademy.edu', '3-5 months', 'LinkedIn Outreach', '2025-06-23', '2025-07-01', 'Waiting for internal board meeting; send full project roadmap', NOW(), NOW()),
(16, '2025-07-02', '2025-06-30', NULL, 4, 'Virtual Lab Environment Setup', 'Science Department Chair', 'Lack of hands-on virtual science lab tools', 'Suggest cloud-based virtual lab subscription', 'Needs interactive simulations for biology and physics', 'www.futurelearns.ph', '1 month', 'Web Chat Inquiry', '2025-06-30', '2025-07-02', 'Conducted discovery call; requested case studies and trial link', NOW(), NOW()),
(17, '2025-07-01', '2025-06-28', NULL, 1, 'AI Chatbot for Student Support', 'VP of Student Affairs', 'Delayed student helpdesk response', 'Propose AI chatbot with natural language support', '24/7 virtual assistant for student queries', 'www.brightcore.tech', '2-4 months', 'Referral', '2025-06-26', '2025-07-01', 'Wants chatbot to integrate with existing student portal', NOW(), NOW()),
(18, '2025-06-29', '2025-06-24', NULL, 3, 'Full eLearning Platform Development', 'Chief Innovation Officer', 'Using outdated, piecemeal systems for LMS and content', 'Recommend custom-built platform with content authoring tools', 'Mobile-friendly LMS, SCORM support, integrated grading', 'www.academia360.com', 'Q4 2025', 'LinkedIn', '2025-06-24', '2025-06-29', 'Plans to replace entire infrastructure before next school year', NOW(), NOW()),
(19, '2025-06-30', '2025-06-25', NULL, 3, 'Rural STEM Learning Kits + Online Access', 'Director of Community Outreach', 'Limited digital access in partner schools', 'Suggest bundled offline-first STEM kits with companion app', 'Needs solar-powered devices and downloadable lessons', 'www.stemroots.org', '3-6 months', 'Event Booth', '2025-06-25', '2025-06-30', 'Requesting CSR-aligned pricing and possible NGO partnership', NOW(), NOW()),
(20, '2025-07-02', '2025-06-29', NULL, 3, 'Student Information System Integration', 'Chief Information Officer', 'Data fragmentation across multiple campuses', 'Recommend centralized SIS with API support', 'Needs reporting tools, role-based dashboards, parent access', 'www.eduwiseglobal.com', 'Q3 2025', 'Email Campaign', '2025-06-29', '2025-07-02', 'Shared internal workflow documentation; follow-up on data migration features', NOW(), NOW());

-- Insert product groups (keeping original column names)
INSERT INTO product_group (group_name) VALUES
('EdTech'),
('Social Media'),
('SchoolAide');

-- Insert services (keeping original column names)
INSERT INTO service (group_id, service_name, pricing, license_type) VALUES
-- EdTech group
(1, 'Microsoft365', 15000.00, 'ET-M365'),
(1, 'Minecraft Education', 25000.00, 'ET-MCED'),
(1, 'Blackbot', 5000.00, 'ET-BBOT'),

-- SocMed group
(2, 'Website', 18000.00, 'SM-WEB'),
(2, 'Mobile App', 22000.00, 'SM-MAPP'),
(2, 'E-Commerce', 35000.00, 'SM-ECOM'),

-- SchoolAide group
(3, 'Tapso', 28000.00, 'SA-TAP'),
(3, 'GradeSys', 15000.00, 'SA-GSYS'),
(3, 'OnlineEval', 42000.00, 'SA-ONEV');

-- Assign services to clients (keeping original column names)
INSERT INTO client_avail_service (
    sq_num,
    client_id, 
    group_id, 
    service_id, 
    proposal_date, 
    project_year, 
    contract_duration, 
    agreement_status, 
    contract_type,
    date_signed, 
    project_status, 
    license_count, 
    availment_status
) VALUES
-- Client 1 (5 services)
('3825-417', 1, 1, 2, '2024-01-05', 2024, '1 year', 'Signed', 'Initial', '2024-01-10', 'Implementation', 50, 'Ongoing'),
('7152-093', 1, 1, 3, '2024-02-15', 2024, '2 years', 'Pending', 'For Rebid', '2024-02-20', 'Evaluation', 75, 'New'),
('4963-281', 1, 2, 5, '2024-03-10', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-03-15', 'Active', 100, 'Ongoing'),
('2038-645', 1, 3, 7, '2024-04-20', 2024, '6 months', 'Draft', 'Initial', '2024-04-25', 'Planning', 25, 'New'),
('8571-302', 1, 2, 6, '2024-05-05', 2024, '18 months', 'Signed', 'Initial', '2024-05-10', 'Completed', 150, 'For Renewal'),

-- Client 2 (4 services)
('6294-105', 2, 1, 1, '2024-01-10', 2024, '2 years', 'Signed', 'Initial', '2024-01-15', 'Active', 30, 'Ongoing'),
('3407-869', 2, 1, 4, '2024-02-20', 2024, '1 year', 'Pending', 'For Rebid', '2024-02-25', 'Pending Approval', 60, 'New'),
('9182-453', 2, 3, 9, '2024-03-25', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-04-01', 'Implementation', 90, 'Ongoing'),
('5670-214', 2, 2, 5, '2024-05-15', 2024, '6 months', 'Draft', 'Initial', '2024-05-20', 'Planning', 120, 'New'),

-- Client 3 (5 services)
('1249-738', 3, 1, 3, '2024-01-15', 2024, '1 year', 'Signed', 'Initial', '2024-01-20', 'Active', 40, 'Ongoing'),
('8035-621', 3, 2, 6, '2024-02-25', 2024, '2 years', 'Pending', 'For Rebid', '2024-03-01', 'Evaluation', 80, 'New'),
('4592-087', 3, 3, 8, '2024-03-10', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-03-15', 'Implementation', 35, 'Ongoing'),
('2768-394', 3, 1, 2, '2024-04-20', 2024, '18 months', 'Draft', 'Initial', '2024-04-25', 'Planning', 65, 'New'),
('9310-526', 3, 2, 4, '2024-05-05', 2024, '6 months', 'Signed', 'Initial', '2024-05-10', 'Completed', 110, 'For Renewal'),

-- Client 4 (3 services)
('6853-209', 4, 1, 4, '2024-01-20', 2024, '2 years', 'Signed', 'Initial', '2024-01-25', 'Active', 55, 'Ongoing'),
('3179-604', 4, 2, 5, '2024-03-05', 2024, '1 year', 'Pending', 'For Rebid', '2024-03-10', 'Pending Approval', 85, 'New'),
('0426-851', 4, 3, 7, '2024-04-10', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-04-15', 'Implementation', 45, 'Ongoing'),

-- Client 5 (5 services)
('7591-328', 5, 2, 5, '2024-01-25', 2024, '1 year', 'Signed', 'Initial', '2024-02-01', 'Active', 70, 'Ongoing'),
('2084-693', 5, 2, 6, '2024-02-15', 2024, '2 years', 'Pending', 'For Rebid', '2024-02-20', 'Evaluation', 95, 'New'),
('8463-017', 5, 3, 9, '2024-03-20', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-03-25', 'Implementation', 25, 'Ongoing'),
('5730-482', 5, 1, 1, '2024-04-05', 2024, '6 months', 'Draft', 'Initial', '2024-04-10', 'Planning', 130, 'New'),
('3918-254', 5, 3, 8, '2024-05-15', 2024, '18 months', 'Signed', 'Initial', '2024-05-20', 'Completed', 50, 'For Renewal'),

-- Client 6 (4 services)
('6247-930', 6, 3, 7, '2024-01-30', 2024, '1 year', 'Signed', 'Initial', '2024-02-05', 'Active', 60, 'Ongoing'),
('0875-316', 6, 3, 8, '2024-03-10', 2024, '2 years', 'Pending', 'For Rebid', '2024-03-15', 'Pending Approval', 90, 'New'),
('3592-648', 6, 1, 2, '2024-04-15', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-04-20', 'Implementation', 35, 'Ongoing'),
('4716-805', 6, 2, 4, '2024-05-25', 2024, '6 months', 'Draft', 'Initial', '2024-05-30', 'Planning', 75, 'New'),

-- Client 7 (5 services)
('8264-139', 7, 1, 1, '2024-01-05', 2024, '1 year', 'Signed', 'Initial', '2024-01-10', 'Active', 45, 'Ongoing'),
('5039-472', 7, 1, 3, '2024-02-15', 2024, '2 years', 'Pending', 'For Rebid', '2024-02-20', 'Evaluation', 80, 'New'),
('1947-583', 7, 2, 6, '2024-03-20', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-03-25', 'Implementation', 55, 'Ongoing'),
('6380-215', 7, 3, 9, '2024-04-05', 2024, '6 months', 'Draft', 'Initial', '2024-04-10', 'Planning', 100, 'New'),
('9725-406', 7, 2, 5, '2024-05-15', 2024, '18 months', 'Signed', 'Initial', '2024-05-20', 'Completed', 30, 'For Renewal'),

-- Client 8 (3 services)
('2856-914', 8, 1, 2, '2024-01-10', 2024, '2 years', 'Signed', 'Initial', '2024-01-15', 'Active', 65, 'Ongoing'),
('7093-168', 8, 2, 4, '2024-03-05', 2024, '1 year', 'Pending', 'For Rebid', '2024-03-10', 'Pending Approval', 95, 'New'),
('4168-027', 8, 3, 7, '2024-04-10', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-04-15', 'Implementation', 40, 'Ongoing'),

-- Client 9 (4 services)
('8532-701', 9, 2, 5, '2024-01-15', 2024, '1 year', 'Signed', 'Initial', '2024-01-20', 'Active', 50, 'Ongoing'),
('2670-489', 9, 2, 6, '2024-02-25', 2024, '2 years', 'Pending', 'For Rebid', '2024-03-01', 'Evaluation', 85, 'New'),
('9413-052', 9, 1, 3, '2024-03-10', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-03-15', 'Implementation', 60, 'Ongoing'),
('0784-613', 9, 3, 8, '2024-05-20', 2024, '6 months', 'Draft', 'Initial', '2024-05-25', 'Planning', 110, 'New'),

-- Client 10 (5 services)
('3258-794', 10, 1, 1, '2024-01-20', 2024, '1 year', 'Signed', 'Initial', '2024-01-25', 'Active', 35, 'Ongoing'),
('6901-243', 10, 1, 4, '2024-02-05', 2024, '2 years', 'Pending', 'For Rebid', '2024-02-10', 'Pending Approval', 70, 'New'),
('4179-506', 10, 2, 5, '2024-03-15', 2024, '3 years', 'Signed', 'Auto Renewal', '2024-03-20', 'Implementation', 45, 'Ongoing'),
('8325-619', 10, 3, 9, '2024-04-25', 2024, '6 months', 'Draft', 'Initial', '2024-04-30', 'Planning', 90, 'New'),
('0568-372', 10, 2, 6, '2024-05-10', 2024, '18 months', 'Signed', 'Initial', '2024-05-15', 'Completed', 25, 'For Renewal');

COMMIT;