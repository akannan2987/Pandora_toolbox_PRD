export const requirementsData = [
  // Requirements 1-8: Chemical Registration & Management
  {
    id: 1,
    requirement: "Support multiple chemical upload methods",
    implementation: "Build file upload endpoint accepting Excel/SDF files with drag-drop UI",
    example: "User drags Excel → 500 chemicals load in 30 sec (vs manual typing)"
  },
  {
    id: 2,
    requirement: "Keep DTX ID system compatible",
    implementation: "Create ID mapping table: Old_ID → New_ID, update all foreign keys",
    example: "Old DTX_001636 → New N-001636 (migration auto-updates references)"
  },
  {
    id: 3,
    requirement: "Auto-calculate chemical properties",
    implementation: "Integrate RDKit library, parse SMILES, calculate molecular properties",
    example: "User draws structure → MW=180.16, Formula=C9H8O4 auto-filled"
  },
  {
    id: 4,
    requirement: "Find chemicals by similar structure",
    implementation: "Implement Tanimoto similarity algorithm on fingerprints",
    example: "User draws aspirin → Shows ibuprofen (92%), naproxen (88%) matches"
  },
  {
    id: 5,
    requirement: "Track chemical versions",
    implementation: "Create versioning table, auto-increment on updates",
    example: "Correct formula → v1→v2→v3 (versioning automatic)"
  },
  {
    id: 6,
    requirement: "Check duplicate chemicals in real-time",
    implementation: "Query CHEMICAL table before INSERT, show warning if exists",
    example: "User enters CAS 50-78-2 → \"Aspirin exists - skip?\""
  },
  {
    id: 7,
    requirement: "Remove salt from structures",
    implementation: "Use salt-stripping library (MolVS or ChemAxon)",
    example: "Input: ibuprofen+sodium → Output: pure ibuprofen"
  },
  {
    id: 8,
    requirement: "Export data in multiple formats",
    implementation: "Build export endpoints (Excel, SDF, CSV, JSON formatters)",
    example: "Select 100 → Download Excel or SDF file"
  },

  // Requirements 9-16: Data Upload & Processing
  {
    id: 9,
    requirement: "Admin defines upload templates without coding",
    implementation: "Build UI form: column_name, data_type, required, validation_rules stored in DB",
    example: "Admin creates \"Toxicology\" template: CAS, SBL1(0-100), Notes"
  },
  {
    id: 10,
    requirement: "Visual transformation rules via UI",
    implementation: "Implement drag-drop builder: source → target + transformation functions",
    example: "Drag Source_Name → Target_Name → \"Uppercase\" + \"Trim\""
  },
  {
    id: 11,
    requirement: "Support multiple analytical techniques",
    implementation: "Create separate template sets per technique (GC/LC/HS)",
    example: "GC: RI, MW; LC: RT, Wavelength; HS: Temperature"
  },
  {
    id: 12,
    requirement: "Real-time validation during upload",
    implementation: "Row-by-row validation on change event, highlight errors",
    example: "Row 5: red \"SBL=150 exceeds max 100\""
  },
  {
    id: 13,
    requirement: "Track upload progress",
    implementation: "Implement progress tracking: processed/total, ETA calculation",
    example: "\"65% complete, ~2 min remaining\""
  },
  {
    id: 14,
    requirement: "Auto-link related records",
    implementation: "SQL join on CAS/SMILES/ID during load, create foreign keys",
    example: "Toxicology CAS=50-78-2 → auto-links to aspirin record"
  },
  {
    id: 15,
    requirement: "Maintain audit trail of uploads",
    implementation: "Create audit_log table: user, timestamp, record_count, changes",
    example: "\"Nov 3 2:30 john.smith: 500 chem (450 new, 50 upd)\""
  },
  {
    id: 16,
    requirement: "Detailed error reporting",
    implementation: "Error message format: \"Row X, Column Y: value, reason, fix\"",
    example: "\"Row 42, Column C: 150 invalid (max 100)\""
  },

  // Requirements 17-23: Search & Data Discovery
  {
    id: 17,
    requirement: "Search by all name variants",
    implementation: "Create full-text index on name fields, union results",
    example: "Search \"acetylsalicylic\" → finds Aspirin + IUPAC + aliases"
  },
  {
    id: 18,
    requirement: "Boolean search operators",
    implementation: "Build search query parser: AND/OR/NOT logic to SQL WHERE",
    example: "\"(aspirin OR ibuprofen) AND (weight>200)\""
  },
  {
    id: 19,
    requirement: "Structure similarity search",
    implementation: "Implement Tanimoto algorithm with configurable threshold",
    example: "Draw naphthalene → finds phenanthrene (95%), anthracene (94%)"
  },
  {
    id: 20,
    requirement: "Numeric range filtering",
    implementation: "Add slider UI controls, translate to BETWEEN SQL",
    example: "MW slider 100-500 → shows 1,250 chemicals"
  },
  {
    id: 21,
    requirement: "Save searches as templates",
    implementation: "Store search criteria in user_saved_searches table",
    example: "Save as \"Heavy Organics\" → one-click rerun"
  },
  {
    id: 22,
    requirement: "Auto-suggest names on type",
    implementation: "Implement fuzzy matching (Levenshtein distance)",
    example: "Type \"aspi...\" → suggest Aspirin, Aspirate"
  },
  {
    id: 23,
    requirement: "Cross-dataset search",
    implementation: "Query union across chemicals, samples, results tables",
    example: "Search \"PAN-2025-001\" → Sample + results + chemicals"
  },

  // Requirements 24-31: Sample Management
  {
    id: 24,
    requirement: "Direct SLIMS API connection",
    implementation: "Build REST connector: authenticate, call /api/samples, parse response",
    example: "System reads samples from SLIMS automatically (no manual export)"
  },
  {
    id: 25,
    requirement: "Auto hourly sync from SLIMS",
    implementation: "Schedule job: query new/modified since last_sync",
    example: "+47 new samples appear in system automatically"
  },
  {
    id: 26,
    requirement: "Auto sample status tracking",
    implementation: "Trigger on linked screening/bioassay completion, update status",
    example: "\"Registered\" → screening arrives → \"Screening_Complete\""
  },
  {
    id: 27,
    requirement: "Bulk sample operations",
    implementation: "UI: select checkbox, bulk action dropdown (mark compliant, delete)",
    example: "Select 500 samples + \"Mark Compliant\" → all update automatically"
  },
  {
    id: 28,
    requirement: "Confidentiality controls",
    implementation: "Add confidentiality_flag, enforce row-level security in queries",
    example: "Tag \"NR Only\" → only NR team views (others denied)"
  },
  {
    id: 29,
    requirement: "Document attachments",
    implementation: "Store files in S3/Azure, store metadata + links in DB",
    example: "Upload report.pdf → stored in cloud → link in sample"
  },
  {
    id: 30,
    requirement: "Edit sample composition",
    implementation: "Create sample_composition table with versions, track changes",
    example: "v1: 60% plastic, 40% additive → v2: 65%, 35%"
  },
  {
    id: 31,
    requirement: "Auto screening linkage",
    implementation: "SQL join on completion: sample_id = screening.sample_id",
    example: "New screening for S-12345 → auto-links to sample"
  },

  // Requirements 32-38: Regulatory & Compliance
  {
    id: 32,
    requirement: "Regulatory API connection",
    implementation: "Build MDC Tech connector: authenticate, fetch regulations",
    example: "System gets \"Bisphenol A banned EU Nov 1\" (no manual entry)"
  },
  {
    id: 33,
    requirement: "Real-time regulatory updates",
    implementation: "Webhook listener: detect changes, trigger Snowflake upsert",
    example: "Change posted → syncs to system automatically"
  },
  {
    id: 34,
    requirement: "Country/regulation filtering",
    implementation: "Add country, reg_type columns, enable filtering in UI",
    example: "Select France + Food → shows 1,250 relevant regs"
  },
  {
    id: 35,
    requirement: "Auto compliance checking",
    implementation: "SQL procedure: compare chemical vs regulation limits",
    example: "Aspirin MW=180 vs limit=300 → auto-mark PASS"
  },
  {
    id: 36,
    requirement: "Multiple regulation types",
    implementation: "Design flexible schema: regulation_framework column",
    example: "EU plastic, Swiss ink, US FDA in same table"
  },
  {
    id: 37,
    requirement: "Regulation change alerts",
    implementation: "Compare old vs new: find affected chemicals, email list",
    example: "Lead limit changed → find affected → email alerts"
  },
  {
    id: 38,
    requirement: "Auto compliance reports",
    implementation: "SQL query: join chemical+regulation+sample, export PDF",
    example: "\"Export Switzerland Compliance\" → PDF with all status"
  },

  // Requirements 39-45: User Experience
  {
    id: 39,
    requirement: "Responsive design for all devices",
    implementation: "Use CSS media queries: desktop 3-col, tablet 2-col, mobile 1-col",
    example: "Same app: desktop wide, phone stacked"
  },
  {
    id: 40,
    requirement: "Role-based dashboards",
    implementation: "Conditional UI rendering: if chemist show X, if manager show Y",
    example: "Chemist: \"New Chemicals\"; Manager: \"Status\"; Compliance: \"Alerts\""
  },
  {
    id: 41,
    requirement: "Customizable preferences",
    implementation: "Store in user_preferences table: theme, columns, filters",
    example: "User saves: Dark theme + [CAS,MW,XLogP] + my_projects"
  },
  {
    id: 42,
    requirement: "Navigation breadcrumbs",
    implementation: "Track page hierarchy, render breadcrumb component",
    example: "\"Home > Chemicals > Organic > Aspirin\" (clickable)"
  },
  {
    id: 43,
    requirement: "Drag-drop file upload",
    implementation: "HTML5 File API: drag over area, show file preview before upload",
    example: "Drag file → Preview \"5K rows, 12 cols, 15MB\" → upload"
  },
  {
    id: 44,
    requirement: "Inline field validation",
    implementation: "onChange event: validate value, show red X or green check",
    example: "Type MW=2000 → Red: \"typical 0-1000?\""
  },
  {
    id: 45,
    requirement: "Keyboard shortcuts",
    implementation: "Event listeners: Ctrl+N=new, Ctrl+F=search, Ctrl+L=load",
    example: "Power users: keyboard shortcuts for common actions"
  },

  // Requirements 46-51: Collaboration & Audit
  {
    id: 46,
    requirement: "Experiment tracking with links",
    implementation: "Create EXPERIMENT table + foreign keys to CHEMICAL, SAMPLE, RESULT",
    example: "Create \"Aspirin Test\" → add 5 chem, 10 samples, 50 results"
  },
  {
    id: 47,
    requirement: "Team sharing controls",
    implementation: "Share_permission table: team_id, user_id, record_type, access_level",
    example: "Share chem with EU_Team → only they view"
  },
  {
    id: 48,
    requirement: "Comments and annotations",
    implementation: "Comments table: linked to record_type+record_id, user, timestamp",
    example: "Comment: \"MW verified by GCMS Nov 3 jane.doe\""
  },
  {
    id: 49,
    requirement: "Workflow automation engine",
    implementation: "Trigger-action rule builder: IF event THEN action(s)",
    example: "\"New sample\" → \"Email team, create task, schedule\""
  },
  {
    id: 50,
    requirement: "Notifications on changes",
    implementation: "Email/SMS service: triggered on record update, compliance alert",
    example: "Chemical non-compliant → \"Alert: 1 of 5 now non-compliant\""
  },
  {
    id: 51,
    requirement: "Comprehensive audit trail",
    implementation: "Audit_log: user, action, timestamp, field_before, field_after",
    example: "History: \"Oct 15 john created; Nov 3 14:22 jane changed MW\""
  },

  // Requirements 52-67: Performance, Security, Integration
  {
    id: 52,
    requirement: "Auto-scaling servers",
    implementation: "Cloud deployment: load balancer, auto-spawn instances on CPU%",
    example: "10 users=1 server; 100=3; 1000=10 (automatic)"
  },
  {
    id: 53,
    requirement: "Data caching layer",
    implementation: "Redis cache: GET responses, invalidate on PUT/DELETE",
    example: "First aspirin: 100ms; cached: 1ms (99x faster)"
  },
  {
    id: 54,
    requirement: "Parallel processing",
    implementation: "Split bulk uploads into chunks, process on multiple cores",
    example: "100K records → 4×25K parallel processing"
  },
  {
    id: 55,
    requirement: "Database indexes",
    implementation: "Create indexes on search columns: CAS, name, chemical_id",
    example: "CAS search 1M records: significantly faster lookups"
  },
  {
    id: 56,
    requirement: "Offline capability",
    implementation: "Service workers + localStorage: cache 10K chemicals for offline search",
    example: "Airplane: search cached data → reconnect → auto-sync"
  },
  {
    id: 57,
    requirement: "Company SSO authentication",
    implementation: "Integrate LDAP/SAML with Active Directory",
    example: "User logs \"john.smith@nestle.com\" → uses AD password"
  },
  {
    id: 58,
    requirement: "Data encryption",
    implementation: "At-rest (Snowflake encryption) + in-transit (HTTPS) + field-level",
    example: "All data encrypted; HTTPS only; DB stolen = unreadable"
  },
  {
    id: 59,
    requirement: "Audit logging framework",
    implementation: "Audit_log table: all INSERT/UPDATE/DELETE with user/timestamp",
    example: "Query \"Who accessed aspirin?\" → 47 views logged"
  },
  {
    id: 60,
    requirement: "Backup and recovery",
    implementation: "Automated snapshots, point-in-time restore capability",
    example: "Accidental delete → restore from backup → recovered"
  },
  {
    id: 61,
    requirement: "Regulatory compliance (GDPR)",
    implementation: "Auto-delete personal data after retention period, audit trail",
    example: "7-year retention: auto-delete, audit log remains"
  },
  {
    id: 62,
    requirement: "Role-based access control",
    implementation: "Role_permission table: define permissions per role",
    example: "Chemist: view+edit; Manager: +delete; Viewer: view"
  },
  {
    id: 63,
    requirement: "REST API exposure",
    implementation: "Build endpoints: /api/chemical, /api/sample, /api/search with auth",
    example: "ERP calls \"GET /api/chemical?cas=50-78-2\" → JSON response"
  },
  {
    id: 64,
    requirement: "Webhook notifications",
    implementation: "Webhook framework: external systems subscribe to events",
    example: "ERP subscribes \"on_chemical_update\" → gets notified"
  },
  {
    id: 65,
    requirement: "Plugin architecture",
    implementation: "Plugin framework: standardized interface, system loads dynamically",
    example: "Team creates \"Custom SBL\" plugin → auto-loaded"
  },
  {
    id: 66,
    requirement: "Scheduled automated exports",
    implementation: "Job scheduler: export Excel daily, email to distribution list",
    example: "Daily: new chemicals → Excel → email regulatory@nestle"
  },
  {
    id: 67,
    requirement: "Import error reporting",
    implementation: "Validator: detailed errors with row/column/value/fix suggestion",
    example: "\"Row 42 Col C: 150 invalid (max 100)\""
  },

  // Requirements 68-93: Scenario B Phase 1 - Migration & API Layer
  {
    id: 68,
    requirement: "Data mapping documentation",
    implementation: "Create mapping: Dotmatics.table → Snowflake.table (field conversions)",
    example: "Map all tables with field conversion rules"
  },
  {
    id: 69,
    requirement: "Migration validation scripts",
    implementation: "Export Dotmatics → validate row counts → load Snowflake → verify",
    example: "Validate no data loss during migration"
  },
  {
    id: 70,
    requirement: "Bidirectional sync during transition",
    implementation: "Build sync service: replicate changes both directions",
    example: "User uploads Dotmatics → syncs to Snowflake"
  },
  {
    id: 71,
    requirement: "Data quality verification",
    implementation: "Sample comparison: pick 100 records, compare field values",
    example: "Check 100 chemicals: all fields match ✓"
  },
  {
    id: 72,
    requirement: "Rollback and restore procedures",
    implementation: "Backup before migration, automated restore capability",
    example: "Migration issues → restore from backup"
  },
  {
    id: 73,
    requirement: "Gradual module-based migration",
    implementation: "Migrate modules separately: chemicals, samples, screening",
    example: "No downtime: users continue working"
  },
  {
    id: 74,
    requirement: "Optimized Snowflake schema design",
    implementation: "Create fact/dimension tables for analytical efficiency",
    example: "Efficient structure for queries"
  },
  {
    id: 75,
    requirement: "Data partitioning strategy",
    implementation: "Partition large tables by date or ID",
    example: "Faster queries on partitioned data"
  },
  {
    id: 76,
    requirement: "Materialized views for performance",
    implementation: "Pre-calculate common queries on schedule",
    example: "Reports run faster with pre-calculated views"
  },
  {
    id: 77,
    requirement: "Data archiving and retention",
    implementation: "Define retention periods, move old to archive storage",
    example: "Old data moved to cheaper storage"
  },
  {
    id: 78,
    requirement: "Time travel query capability",
    implementation: "Enable Snowflake time travel for historical queries",
    example: "Query data as it was on any past date"
  },
  {
    id: 79,
    requirement: "Data lineage tracking",
    implementation: "Record source, transformations, load timestamp per record",
    example: "Track data origin and transformations"
  },
  {
    id: 80,
    requirement: "API middleware creation",
    implementation: "Build API layer translating Dotmatics to Snowflake",
    example: "Dotmatics queries routed through API"
  },
  {
    id: 81,
    requirement: "API authentication and authorization",
    implementation: "OAuth2 + API key management, role-based access",
    example: "Secure API access with permissions"
  },
  {
    id: 82,
    requirement: "CRUD operations via API",
    implementation: "REST endpoints: POST create, GET read, PUT update, DELETE",
    example: "Full CRUD via REST endpoints"
  },
  {
    id: 83,
    requirement: "Bulk operations endpoint",
    implementation: "Accept arrays of records for batch operations",
    example: "Bulk load 1K records in single API call"
  },
  {
    id: 84,
    requirement: "Response caching strategy",
    implementation: "Redis cache GET responses, invalidate on updates",
    example: "Faster response times with caching"
  },
  {
    id: 85,
    requirement: "API versioning scheme",
    implementation: "/api/v1 and /api/v2 for backward compatibility",
    example: "Support multiple API versions"
  },
  {
    id: 86,
    requirement: "Dotmatics connection string redirection",
    implementation: "Change config: oracle://old → https://api.snowflake.local",
    example: "Silent backend change"
  },
  {
    id: 87,
    requirement: "Dotmatics UI preservation",
    implementation: "Keep UI unchanged, route through API to Snowflake",
    example: "User sees same Dotmatics interface"
  },
  {
    id: 88,
    requirement: "Single authentication token passing",
    implementation: "Dotmatics AD login → pass token to API",
    example: "Seamless authentication"
  },
  {
    id: 89,
    requirement: "Performance parity with original",
    implementation: "Monitor response times, add caching/indexes",
    example: "New system performs well"
  },
  {
    id: 90,
    requirement: "Dual query method support",
    implementation: "Accept both Dotmatics and Snowflake query syntax",
    example: "Legacy queries still work"
  },
  {
    id: 91,
    requirement: "Gradual traffic routing migration",
    implementation: "Load balancer percentage-based shift",
    example: "Phase migration of users to new system"
  },
  {
    id: 92,
    requirement: "Fallback routing mechanism",
    implementation: "Detect Snowflake down, route to Dotmatics",
    example: "System available at all times"
  },
  {
    id: 93,
    requirement: "Search syntax translation",
    implementation: "Convert Dotmatics search to Snowflake SQL",
    example: "Searches work as before"
  },

  // Requirements 94-99: Data Catalog
  {
    id: 94,
    requirement: "Deploy data catalog system",
    implementation: "Install Atlan/Collibra, connect to Snowflake, auto-extract metadata",
    example: "System shows all datasets: \"SCREENING: 100M rows, by jane.doe\""
  },
  {
    id: 95,
    requirement: "Auto-discover data sources",
    implementation: "Configure catalog connectors for SLIMS, LIMS, databases",
    example: "Sources auto-discovered (no manual registration)"
  },
  {
    id: 96,
    requirement: "Display data lineage",
    implementation: "Extract and visualize data flow: source → transform → Snowflake",
    example: "Click SCREENING → Shows LIMS → Parse → Validate → Snowflake"
  },
  {
    id: 97,
    requirement: "Quality monitoring alerts",
    implementation: "Define metrics: completeness, timeliness, range checks",
    example: "Rule \"SBL 0-100\": 500 OK, 5 fail → \"1% issue\" alert"
  },
  {
    id: 98,
    requirement: "Data sensitivity labeling",
    implementation: "Tag columns: PII, Confidential, Public → enforce access",
    example: "\"supplier_info\" = Confidential → only Procurement views"
  },
  {
    id: 99,
    requirement: "Self-service discovery interface",
    implementation: "Build UI: search, filter, preview datasets",
    example: "Search \"toxicology\" → Find TOXICOLOGY_RESULTS, preview data"
  },

  // Requirements 100-109: ETL Orchestration
  {
    id: 100,
    requirement: "Build reusable data connectors",
    implementation: "Create connector modules: authenticate, extract, parse",
    example: "SLIMS connector: \"What changed?\" → fetch only new"
  },
  {
    id: 101,
    requirement: "Create pipeline per data type",
    implementation: "Separate DAGs: chemical, toxicology, screening, sample, bioassay",
    example: "Each independent: SLIMS→Validate→Deduplicate→Snowflake"
  },
  {
    id: 102,
    requirement: "Schedule pipeline execution",
    implementation: "Deploy Airflow with DAG schedules",
    example: "Chemicals: daily; Toxicology: every 4 hrs; Screening: on-demand"
  },
  {
    id: 103,
    requirement: "Real-time data streaming",
    implementation: "Kafka or Snowflake Snowpipe: capture new results immediately",
    example: "LIMS result appears in system within minutes"
  },
  {
    id: 104,
    requirement: "Incremental loading (CDC)",
    implementation: "Track last_sync, query only new/changed since then",
    example: "SLIMS 1M total, only 25 new this run (50x reduction)"
  },
  {
    id: 105,
    requirement: "Data validation layer",
    implementation: "Validate before insert: type check, range check, required field",
    example: "Before insert: CAS valid, MW 0-10K, SBL 0-100"
  },
  {
    id: 106,
    requirement: "Visual transformation builder",
    implementation: "Drag-drop UI: source column → target + transformation functions",
    example: "Drag source → target → \"Uppercase\" \"Trim\" (no coding)"
  },
  {
    id: 107,
    requirement: "Graceful failure handling",
    implementation: "Retry logic: exponential backoff, dead-letter queue",
    example: "500 load: 5 fail → retry 3x → quarantine for review"
  },
  {
    id: 108,
    requirement: "Pipeline monitoring dashboard",
    implementation: "Status dashboard + email alerts on failure",
    example: "Dashboard: Chem OK✓ Tox failed✗ → Email alert"
  },
  {
    id: 109,
    requirement: "Rollback and recovery",
    implementation: "Backup snapshots before load, UI button to restore",
    example: "Bad data → \"Rollback\" → restore previous version"
  },

  // Requirements 110-124: Automated Pipelines
  {
    id: 110,
    requirement: "SLIMS chemical auto-extraction",
    implementation: "Build SLIMS API connector: fetch new registrations",
    example: "Chemist registers → auto-appears in system"
  },
  {
    id: 111,
    requirement: "Auto chemical property calculation",
    implementation: "RDKit: validate SMILES, calculate properties",
    example: "SMILES input → MW, Formula auto-calculated"
  },
  {
    id: 112,
    requirement: "External catalog enrichment",
    implementation: "Optional PubChem connector: enrich with synonyms/properties",
    example: "Lookup aspirin → 20 synonyms + properties"
  },
  {
    id: 113,
    requirement: "Duplicate detection alerts",
    implementation: "Tanimoto similarity: >90% match alerts as duplicate",
    example: "New chemical 92% → \"Possible duplicate of aspirin\""
  },
  {
    id: 114,
    requirement: "LIMS toxicology auto-extraction",
    implementation: "Build LIMS connector: poll for completed tests",
    example: "LIMS tests → System fetches automatically"
  },
  {
    id: 115,
    requirement: "Real-time result streaming",
    implementation: "Snowflake Snowpipe/Kafka: <5 min latency",
    example: "LIMS result appears in system automatically"
  },
  {
    id: 116,
    requirement: "Auto chemical matching in pipeline",
    implementation: "SQL join: toxicology.CAS → chemical.CAS or SMILES",
    example: "Toxicology auto-links to matching chemical"
  },
  {
    id: 117,
    requirement: "Auto SBL calculation on load",
    implementation: "Call stored procedure: MW, population, matrix → SBL",
    example: "Load: auto-calculates SBL automatically"
  },
  {
    id: 118,
    requirement: "Instrument data auto-connection",
    implementation: "Monitor output folder or LIMS: detect new analytical results",
    example: "Instrument results auto-loaded into system"
  },
  {
    id: 119,
    requirement: "Multi-technique parsing",
    implementation: "Separate parsers per technique",
    example: "GC: RI, MW; LC: RT, wavelength; HS: temperature"
  },
  {
    id: 120,
    requirement: "Unknown compound ID assignment",
    implementation: "Auto-generate: U_<RI>_<MZ> format",
    example: "Unknown compound auto-assigned temporary ID"
  },
  {
    id: 121,
    requirement: "Auto screening-sample linking",
    implementation: "SQL join on load: screening.sample_id → sample record",
    example: "New screening auto-links to sample"
  },
  {
    id: 122,
    requirement: "Bi-directional SLIMS sync",
    implementation: "Hourly both directions: Snowflake ↔ SLIMS",
    example: "Data stays synchronized both systems"
  },
  {
    id: 123,
    requirement: "Auto sample status update on pipeline",
    implementation: "State machine: update status when linked data arrives",
    example: "Status auto-updates as data flows in"
  },
  {
    id: 124,
    requirement: "Auto relationship creation on load",
    implementation: "SQL joins on completion: screening→sample, screening→chem",
    example: "Relationships auto-created on load"
  },

  // Requirements 125-139: Embedded Streamlit UI
  {
    id: 125,
    requirement: "Build lightweight Streamlit apps",
    implementation: "Develop: chemical drawer, toxicology form, screening form",
    example: "3 Streamlit apps for manual exceptions"
  },
  {
    id: 126,
    requirement: "Embed Streamlit in main UI via iframe",
    implementation: "Iframe + postMessage API: communication between UI and Streamlit",
    example: "Click button → Streamlit opens in popup"
  },
  {
    id: 127,
    requirement: "Multi-step forms with validation",
    implementation: "5-step Streamlit wizard with client-side auto-save",
    example: "Draw → Names → Batch → Review → Submit"
  },
  {
    id: 128,
    requirement: "Role-based access to forms",
    implementation: "Check user role, show/hide forms",
    example: "Chemist: all; Viewer: none; Admin: all + config"
  },
  {
    id: 129,
    requirement: "Direct Snowflake API from Streamlit",
    implementation: "Snowflake Connector: authenticate service account, INSERT",
    example: "Form submit → data inserts to Snowflake"
  },
  {
    id: 130,
    requirement: "Full submission audit logging",
    implementation: "Log all Streamlit entries: user, timestamp, data",
    example: "All entries logged with full audit trail"
  },
  {
    id: 131,
    requirement: "Chemical structure drawing interface",
    implementation: "Integrate Ketcher/RDKit.js molecular editor",
    example: "Draw structure → auto-generate SMILES"
  },
  {
    id: 132,
    requirement: "Auto property population from structure",
    implementation: "Parse SMILES → calculate properties",
    example: "Draw → auto-fill MW, Formula, properties"
  },
  {
    id: 133,
    requirement: "Duplicate check before submission",
    implementation: "Query registry before insert, show matches",
    example: "Submit → check for duplicates → show warnings"
  },
  {
    id: 134,
    requirement: "Batch versioning auto-management",
    implementation: "Auto-generate N-001636-01, increment on update",
    example: "Versions auto-tracked and managed"
  },
  {
    id: 135,
    requirement: "Snowflake insert with full audit fields",
    implementation: "INSERT with created_by, created_date, created_app",
    example: "Full audit information captured"
  },
  {
    id: 136,
    requirement: "Toxicology entry 5-step wizard",
    implementation: "Streamlit form: chemical → test → data → SBL → review",
    example: "Guided 5-step process for data entry"
  },
  {
    id: 137,
    requirement: "Interactive SBL calculation wizard",
    implementation: "Show formula + calculation steps, user confirms",
    example: "User sees formula and calculation"
  },
  {
    id: 138,
    requirement: "PDF/Excel file import capability",
    implementation: "Upload buttons: extract data, pre-fill form fields",
    example: "Upload file → auto-extract and populate form"
  },
  {
    id: 139,
    requirement: "Chemical linking on Streamlit save",
    implementation: "Match CAS to chemical, insert with foreign key",
    example: "Chemical auto-linked on save"
  },

  // Requirements 140-143: BI & Reporting
  {
    id: 140,
    requirement: "PowerBI dashboard integration",
    implementation: "Configure Snowflake connector, build dashboards",
    example: "Dashboard: 10K chemicals, green=safe, red=non-compliant"
  },
  {
    id: 141,
    requirement: "Multi-BI tool support",
    implementation: "Document Snowflake connection for BI tools",
    example: "Tableau, Looker, PowerBI all connect"
  },
  {
    id: 142,
    requirement: "Role-based dashboard access",
    implementation: "RLS policies in Snowflake + BI security filters",
    example: "Manager: all; Chemist: projects; Compliance: compliance"
  },
  {
    id: 143,
    requirement: "Auto compliance report generation",
    implementation: "Scheduled SQL → compliance report → auto-email",
    example: "Monthly reports auto-generated and sent"
  }
];
