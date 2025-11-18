import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Target, Lightbulb, CheckCircle2, AlertCircle, TrendingUp, Database, Cloud, Zap, Shield, Users, BarChart3, Menu, X, ArrowRight, ArrowDown, GitBranch, FolderSearch, Workflow, Activity, Gauge, Table, RefreshCw, Settings, Link, Monitor } from 'lucide-react';
import { requirementsData } from './data/requirements';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const navigation = [
    { id: 'overview', name: 'Overview', icon: FileText },
    { id: 'executive', name: 'Executive Summary', icon: Target },
    { id: 'flowchart', name: 'Implementation Flow', icon: GitBranch },
    { id: 'scenarioA', name: 'Scenario A', icon: Lightbulb },
    { id: 'scenarioB', name: 'Scenario B', icon: Database },
    { id: 'metrics', name: 'Success Metrics', icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-2 rounded-lg shadow-md">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Pandora Toolbox</h1>
                <p className="text-sm text-slate-600">Product Requirements Document v1.0</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src="/NESTLElogo-Alternative-with-wordmark-signature-oak (1).png"
                alt="Nestlé Logo"
                className="h-20 w-auto object-contain hidden sm:block"
              />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <nav className={`lg:w-64 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
              <div className="space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                        activeTab === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </nav>

          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 animate-fadeIn">
              {activeTab === 'overview' && <OverviewSection />}
              {activeTab === 'flowchart' && <FlowchartSection />}
              {activeTab === 'executive' && <ExecutiveSection />}
              {activeTab === 'scenarioA' && <ScenarioASection expandedSections={expandedSections} toggleSection={toggleSection} />}
              {activeTab === 'scenarioB' && <ScenarioBSection expandedSections={expandedSections} toggleSection={toggleSection} />}
              {activeTab === 'metrics' && <MetricsSection />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-8 animate-slideUp">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Document Overview</h2>
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Draft 1</span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">November 13, 2025</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">7 Pain Points Addressed</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <FileText className="w-6 h-6 mr-2 text-blue-600" />
          Project Summary
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          This PRD contains <span className="font-bold text-blue-600">190 consolidated requirements</span> organized across two strategic scenarios, addressing 7 pain points with complete workflows and current process documentation.
        </p>

        {/* System Inventory Metrics */}
        <div className="bg-white rounded-lg border border-blue-200 p-5 mb-4">
          <h4 className="text-sm font-bold text-slate-900 mb-3">Current System Inventory (November 13, 2025)</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="border-l-4 border-blue-500 pl-3">
              <p className="text-xs text-slate-600">Total Chemicals</p>
              <p className="text-lg font-bold text-slate-900">12,561</p>
              <p className="text-xs text-green-600">+100/year</p>
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              <p className="text-xs text-slate-600">With SMILES</p>
              <p className="text-lg font-bold text-slate-900">6,346</p>
              <p className="text-xs text-slate-500">50.5%</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-3">
              <p className="text-xs text-slate-600">Without SMILES</p>
              <p className="text-lg font-bold text-slate-900">6,215</p>
              <p className="text-xs text-orange-600">49.5% blocked</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-3">
              <p className="text-xs text-slate-600">Active Samples</p>
              <p className="text-lg font-bold text-slate-900">162</p>
              <p className="text-xs text-slate-500">SLIMS linked</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
            <div className="border-l-4 border-cyan-500 pl-3">
              <p className="text-xs text-slate-600">Screening Results</p>
              <p className="text-lg font-bold text-slate-900">5,860</p>
              <p className="text-xs text-slate-500">Total records</p>
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              <p className="text-xs text-slate-600">Identified & Linked</p>
              <p className="text-lg font-bold text-green-700">1,734</p>
              <p className="text-xs text-green-600">30% usable</p>
            </div>
            <div className="border-l-4 border-red-500 pl-3">
              <p className="text-xs text-slate-600">Unknown (U_*)</p>
              <p className="text-lg font-bold text-red-600">4,126</p>
              <p className="text-xs text-red-600">70% ⚠️ CRITICAL</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-3">
              <p className="text-xs text-slate-600">Unknown Backlog</p>
              <p className="text-lg font-bold text-slate-900">2,625 hrs</p>
              <p className="text-xs text-yellow-600">~1.26 FTE-years</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            <div className="border-l-4 border-slate-500 pl-3">
              <p className="text-xs text-slate-600">Manual Data Entry</p>
              <p className="text-lg font-bold text-slate-900">17-33 hrs</p>
              <p className="text-xs text-green-600">Annually - Efficient</p>
            </div>
            <div className="border-l-4 border-amber-500 pl-3">
              <p className="text-xs text-slate-600">Transformation Time</p>
              <p className="text-lg font-bold text-slate-900">40-60 hrs</p>
              <p className="text-xs text-amber-600">Annual - Manual</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-3">
              <p className="text-xs text-slate-600">New Chemicals</p>
              <p className="text-lg font-bold text-slate-900">~100</p>
              <p className="text-xs text-slate-500">Per year</p>
            </div>
          </div>
        </div>

        {/* Critical Issues Summary */}
        <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-5">
          <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Critical Issues & Pain Points Summary
          </h4>

          <div className="space-y-3">
            {/* #1 Data Entry - Minimal */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded mr-3">MINIMAL</span>
                  <h5 className="font-bold text-slate-900">#1 Data Entry</h5>
                </div>
                <span className="text-xs text-slate-500">Req 3, 4, 6 (13)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> 17-33 hrs/yr (not a problem)
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> Optimize downstream (transformation) · <strong>Impact:</strong> Already efficient
              </p>
            </div>

            {/* #2 Unknown Compounds - Critical */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded mr-3">CRITICAL</span>
                  <h5 className="font-bold text-slate-900">#2 Unknown Compounds</h5>
                </div>
                <span className="text-xs text-slate-500">Req 144-162 (19)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> 10% ID → 90%+ ID
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> ML intelligence · <strong>Impact:</strong> 70% screening data currently unusable (4,126 unknowns)
              </p>
            </div>

            {/* #3 SMILES/Structures - Strategic */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded mr-3">STRATEGIC</span>
                  <h5 className="font-bold text-slate-900">#3 SMILES/Structures</h5>
                </div>
                <span className="text-xs text-slate-500">Req 163-172 (10)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> 50.5% → 100% complete
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> Auto-completion · <strong>Impact:</strong> Blocks toxicology workflows
              </p>
            </div>

            {/* #4 Regulatory Lag - Strategic */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded mr-3">STRATEGIC</span>
                  <h5 className="font-bold text-slate-900">#4 Regulatory Lag</h5>
                </div>
                <span className="text-xs text-slate-500">Req 63, 102 (15)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> 2-4 weeks → &lt;1 day
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> MDC API + automation · <strong>Impact:</strong> Compliance risk
              </p>
            </div>

            {/* #5 Vendor Lock-in - Operational */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded mr-3">OPERATIONAL</span>
                  <h5 className="font-bold text-slate-900">#5 Vendor Lock-in</h5>
                </div>
                <span className="text-xs text-slate-500">Req 173-182 (10)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> Dotmatics-dependent → Flexible
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> API abstraction + independence · <strong>Impact:</strong> Limited flexibility
              </p>
            </div>

            {/* #6 Data Transformation - Foundational */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded mr-3">FOUNDATIONAL</span>
                  <h5 className="font-bold text-slate-900">#6 Data Transformation</h5>
                </div>
                <span className="text-xs text-slate-500">Req 9A-16B (15)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> 40-60 hrs manual → &lt;10 hrs auto
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> Standardized scripts · <strong>Impact:</strong> Process inconsistency, scalability limits
              </p>
            </div>

            {/* #7 Data Architecture - Foundational */}
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded mr-3">FOUNDATIONAL</span>
                  <h5 className="font-bold text-slate-900">#7 Data Architecture</h5>
                </div>
                <span className="text-xs text-slate-500">Req 68-99 (32)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> No formal model → Complete ontology
              </p>
              <p className="text-xs text-slate-600">
                <strong>Solution:</strong> Snowflake + metadata · <strong>Impact:</strong> Limits interoperability & automation
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ScenarioCard
          title="Scenario A: Complete Replacement"
          subtitle="166 requirements (67 + 99)"
          icon={Lightbulb}
          color="from-amber-500 to-orange-500"
          description="Build entirely new system with modern technology and ML intelligence"
          features={[
            'Phase 1: Core + Transformation (67 requirements)',
            'Phase 2: ML + Full Automation (99 requirements)',
            'Includes 8 new data transformation requirements',
            'Automated unknown compound identification (ML)'
          ]}
        />
        <ScenarioCard
          title="Scenario B: Hybrid Approach (RECOMMENDED)"
          subtitle="182 requirements (122 + 60)"
          icon={Database}
          color="from-blue-500 to-cyan-500"
          description="Keep Dotmatics UI, replace backend, add intelligence layer"
          features={[
            'Phase 1: Migration + ML + Transformation (122 requirements)',
            'Phase 2: Full Automation + Streaming (60 requirements)',
            'ZERO user impact - same familiar interface',
            'Solves 70% unknown compound crisis'
          ]}
        />
      </div>

      <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-6">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-amber-900 mb-2">Critical Foundation</h4>
            <p className="text-amber-800">
              Core requirements address <span className="font-semibold">6 critical pain points</span> including unknown compound identification (70% of screening data unusable), data transformation standardization (40-60 hrs/year manual), and SMILES completion (49.5% missing).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowchartSection() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const openRequirementsWindow = (path: string) => {
    let requirements: typeof requirementsData = [];
    let title = '';

    switch(path) {
      case '1A':
        requirements = requirementsData.slice(0, 67);
        title = 'Path 1A: Phase 1 Core System Build (67 Requirements)';
        break;
      case '1B':
        requirements = requirementsData.slice(0, 107);
        title = 'Path 1B: Phase 1+2 Complete Build (107 Requirements Total - 67 Phase 1 + 40 Phase 2)';
        break;
      case '2A':
        requirements = requirementsData.slice(67, 93);
        title = 'Path 2A: Phase 1 Database Migration + API (26 Requirements)';
        break;
      case '2B':
        requirements = requirementsData.slice(67, 143);
        title = 'Path 2B: Phase 1+2 Hybrid Complete (76 Requirements Total - 26 Phase 1 + 50 Phase 2)';
        break;
    }

    // Generate table rows HTML
    const tableRows = requirements.map(req => `
      <tr class="hover-row">
        <td class="cell">${req.id}</td>
        <td class="cell">${req.requirement}</td>
        <td class="cell">${req.implementation}</td>
        <td class="cell">${req.example}</td>
      </tr>
    `).join('');

    // Create complete HTML document
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      background: linear-gradient(to bottom right, #f8fafc, #e0f2fe);
      min-height: 100vh;
      padding: 2rem;
    }
    .container {
      max-width: 1400px;
      margin: 0 auto;
    }
    .header-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 2rem;
      margin-bottom: 1.5rem;
    }
    h1 {
      color: #1e293b;
      font-size: 1.875rem;
      font-weight: bold;
      border-bottom: 4px solid #3b82f6;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    .count {
      color: #64748b;
      font-size: 0.875rem;
    }
    .count span {
      color: #3b82f6;
      font-weight: bold;
    }
    .table-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .table-wrapper {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
    }
    thead {
      background: #e2e8f0;
    }
    th {
      padding: 0.75rem 1rem;
      text-align: left;
      font-weight: 600;
      color: #334155;
    }
    th:nth-child(1) { width: 4rem; }
    th:nth-child(2) { width: 25%; }
    th:nth-child(3) { width: 33%; }
    th:nth-child(4) { width: 33%; }
    .cell {
      padding: 1rem;
      border-top: 1px solid #e2e8f0;
    }
    tbody tr:first-child .cell {
      border-top: none;
    }
    tbody tr td:nth-child(1) {
      color: #64748b;
      font-weight: 500;
    }
    tbody tr td:nth-child(2) {
      color: #334155;
    }
    tbody tr td:nth-child(3),
    tbody tr td:nth-child(4) {
      color: #64748b;
    }
    .hover-row:hover {
      background: #f8fafc;
    }
    @media print {
      body {
        background: white;
        padding: 1rem;
      }
      .table-card, .header-card {
        box-shadow: none;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-card">
      <h1>${title}</h1>
      <div class="count">Total Requirements: <span>${requirements.length}</span></div>
    </div>
    <div class="table-card">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Requirement</th>
              <th>Implementation Approach</th>
              <th>Simple Example</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</body>
</html>`;

    // Open new window with the HTML content as a blob URL
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-8 animate-slideUp">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Implementation Flow Diagram</h2>
        <p className="text-slate-600 text-lg">Interactive visualization of all implementation paths</p>
      </div>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 rounded-xl p-8 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Starting Point */}
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white px-8 py-4 rounded-xl shadow-lg text-center">
              <div className="text-sm font-medium mb-1">Current State</div>
              <div className="text-xl font-bold">Pandora Toolbox (Dotmatics)</div>
              <div className="text-sm mt-1">70% screening data unusable • Manual transformations • 12,561 chemicals</div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex justify-center mb-8">
            <ArrowDown className="w-10 h-10 text-slate-500 animate-flowDown" />
          </div>

          {/* Decision Point */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg text-center">
              <div className="font-bold">Choose Implementation Strategy</div>
            </div>
          </div>

          {/* Branching Lines */}
          <div className="relative h-24 mb-4">
            <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
              {/* Left diagonal line to Scenario A */}
              <line
                x1="50%"
                y1="0"
                x2="25%"
                y2="100%"
                stroke="#fb923c"
                strokeWidth="3"
                strokeDasharray="10,6"
                className="animate-pulse-slow"
              />
              {/* Right diagonal line to Scenario B */}
              <line
                x1="50%"
                y1="0"
                x2="75%"
                y2="100%"
                stroke="#22d3ee"
                strokeWidth="3"
                strokeDasharray="10,6"
                className="animate-pulse-slow"
              />
            </svg>
          </div>

          {/* Two Main Branches */}
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Scenario A Branch */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg shadow-lg text-center w-full">
                  <div className="font-bold">Scenario A</div>
                  <div className="text-sm">Complete Replacement</div>
                  <div className="text-xs mt-1 opacity-90">Total: 107 Req</div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-orange-400 animate-flowDown" />
              </div>

              {/* Path 1A */}
              <div
                onMouseEnter={() => setSelectedPath('1A')}
                onMouseLeave={() => setSelectedPath(null)}
                onClick={() => openRequirementsWindow('1A')}
                className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${selectedPath === '1A' ? 'border-orange-500 bg-orange-50 shadow-lg scale-105' : 'border-slate-300 bg-white hover:border-orange-400'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Path 1A</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">67 Req</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1:</strong> Core System Build
                </div>
                <div className="text-xs text-slate-600">Manual uploads • Modern UI</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">Manual baseline</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Core system only</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border-l-2 border-dashed border-orange-300 h-12 animate-pulse-slow"></div>
              </div>

              {/* Path 1B */}
              <div
                onMouseEnter={() => setSelectedPath('1B')}
                onMouseLeave={() => setSelectedPath(null)}
                onClick={() => openRequirementsWindow('1B')}
                className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${selectedPath === '1B' ? 'border-orange-500 bg-orange-50 shadow-lg scale-105' : 'border-slate-300 bg-white hover:border-orange-400'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Path 1B</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">107 Req (67+40)</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1 + 2:</strong> Core + ML + Platform
                </div>
                <div className="text-xs text-slate-600">ML identification • Vendor independence</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-green-600 font-bold">Unknown ID: 10%→90%</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Complete system with ML</div>
                </div>
              </div>
            </div>

            {/* Scenario B Branch */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg text-center w-full">
                  <div className="font-bold">Scenario B</div>
                  <div className="text-sm">Hybrid Approach</div>
                  <div className="text-xs mt-1 opacity-90">Total: 76 Req</div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-cyan-400 animate-flowDown" />
              </div>

              {/* Path 2A */}
              <div
                onMouseEnter={() => setSelectedPath('2A')}
                onMouseLeave={() => setSelectedPath(null)}
                onClick={() => openRequirementsWindow('2A')}
                className={`border-2 rounded-xl p-4 transition-all cursor-pointer ${selectedPath === '2A' ? 'border-cyan-500 bg-cyan-50 shadow-lg scale-105' : 'border-slate-300 bg-white hover:border-cyan-400'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Path 2A</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">26 Req</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1:</strong> Migration + API Layer
                </div>
                <div className="text-xs text-slate-600">Keep Dotmatics UI • Snowflake DB</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">No user impact</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Low-risk migration</div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="border-l-2 border-dashed border-cyan-300 h-12 animate-pulse-slow"></div>
              </div>

              {/* Path 2B - RECOMMENDED */}
              <div
                onMouseEnter={() => setSelectedPath('2B')}
                onMouseLeave={() => setSelectedPath(null)}
                onClick={() => openRequirementsWindow('2B')}
                className={`border-2 rounded-xl p-4 transition-all cursor-pointer relative ${selectedPath === '2B' ? 'border-cyan-500 bg-cyan-50 shadow-xl scale-105' : 'border-cyan-400 bg-gradient-to-br from-yellow-50 to-cyan-50 hover:border-cyan-500 shadow-md'}`}
              >
                <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold shadow-md">
                  ⭐ RECOMMENDED
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-900">Path 2B</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">76 Req (26+50)</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1 + 2:</strong> Migration + Automation
                </div>
                <div className="text-xs text-slate-600">Same UI • Automated • Real-time</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-green-600 font-bold">Work reduction: 80-90%</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Same UI, full automation</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-12 pt-8 border-t-2 border-slate-300">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-100 border border-green-500 rounded"></div>
                <span className="text-xs text-slate-600">Phase 1 Only</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-100 border border-purple-500 rounded"></div>
                <span className="text-xs text-slate-600">Phase 1 + 2</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-100 border border-yellow-500 rounded"></div>
                <span className="text-xs text-slate-600">Recommended</span>
              </div>
              <div className="flex items-center space-x-2">
                <ArrowRight className="w-4 h-4 text-slate-400 rotate-90" />
                <span className="text-xs text-slate-600">Implementation Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Path Details */}
      {selectedPath && (
        <div className="bg-blue-50 border border-blue-300 rounded-xl p-6 animate-slideDown">
          <h3 className="font-bold text-slate-900 mb-3">Path {selectedPath} Details</h3>
          {selectedPath === '1A' && (
            <div>
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Build new system with manual uploads</p>
              <p className="text-slate-700 mb-2"><strong>Timeline:</strong> Fastest to initial deployment</p>
              <p className="text-slate-700"><strong>User Impact:</strong> Learn new interface, same manual work</p>
            </div>
          )}
          {selectedPath === '1B' && (
            <div>
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Build new system + full automation</p>
              <p className="text-slate-700 mb-2"><strong>Timeline:</strong> Longer initial build, maximum ROI</p>
              <p className="text-slate-700"><strong>User Impact:</strong> Learn new interface, 80-90% less manual work</p>
            </div>
          )}
          {selectedPath === '2A' && (
            <div>
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Migrate to Snowflake, keep Dotmatics UI</p>
              <p className="text-slate-700 mb-2"><strong>Timeline:</strong> Fast, low-risk migration</p>
              <p className="text-slate-700"><strong>User Impact:</strong> ZERO - users see no change</p>
            </div>
          )}
          {selectedPath === '2B' && (
            <div>
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Migrate to Snowflake + automate data flows</p>
              <p className="text-slate-700 mb-2"><strong>Timeline:</strong> Phased approach, flexible</p>
              <p className="text-slate-700 mb-2"><strong>User Impact:</strong> Same UI, 80-90% less manual work</p>
              <p className="text-green-600 font-bold mt-3">✓ Recommended for best balance of risk, ROI, and user experience</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ExecutiveSection() {
  return (
    <div className="space-y-8 animate-slideUp">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Executive Summary</h2>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
          Six Critical Pain Points
        </h3>
        <p className="text-slate-700 mb-4">
          Pandora operates efficiently for routine tasks (17-33 hrs/year manual entry) but faces critical data quality and infrastructure challenges:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-slate-900 mb-2">1. Manual Data Entry</h4>
            <p className="text-sm text-slate-600">17-33 hours annually - well-controlled, NOT a major issue</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
            <h4 className="font-bold text-slate-900 mb-2">2. Unknown Compound Crisis</h4>
            <p className="text-sm text-red-600 font-semibold">70% screening data unusable (4,126 unknowns)</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <h4 className="font-bold text-slate-900 mb-2">3. Incomplete SMILES Data</h4>
            <p className="text-sm text-slate-600">49.5% chemicals lack structures (6,215 entries)</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-bold text-slate-900 mb-2">4. Regulatory Integration</h4>
            <p className="text-sm text-slate-600">2-4 week lag from change to system (9-15 hrs/year)</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-slate-900 mb-2">5. Data Linking Quality</h4>
            <p className="text-sm text-slate-600">5% link failures, minimal impact (1-2 hrs/year)</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-red-600">
            <h4 className="font-bold text-slate-900 mb-2">6. Data Transformation Scripts</h4>
            <p className="text-sm text-red-600 font-semibold">Manual, ad-hoc, inconsistent (40-60 hrs/year)</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Four Implementation Paths</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-600 text-white">
                <th className="px-4 py-3 text-left font-semibold">Path</th>
                <th className="px-4 py-3 text-left font-semibold">Scenario</th>
                <th className="px-4 py-3 text-left font-semibold">Phase 1</th>
                <th className="px-4 py-3 text-left font-semibold">Phase 2</th>
                <th className="px-4 py-3 text-left font-semibold">Work Reduction</th>
                <th className="px-4 py-3 text-left font-semibold">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <PathRow path="1A" scenario="Build New" phase1="67 core" phase2="Skip" reduction="Manual baseline" bestFor="Core system only" />
              <PathRow path="1B" scenario="Build New" phase1="67 core" phase2="40 ML+platform" reduction="Unknown ID: 10%→90%" bestFor="Complete system with ML" />
              <PathRow path="2A" scenario="Hybrid" phase1="26 migrate+API" phase2="Skip" reduction="No change" bestFor="Low-risk migration" />
              <PathRow path="2B" scenario="Hybrid" phase1="26 migrate+API" phase2="50 automation" reduction="80-90% work reduction" bestFor="⭐ Same UI, full automation" highlight />
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <CheckCircle2 className="w-6 h-6 mr-2 text-green-600" />
          Key Outcomes (With Automation - Phase 2)
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <OutcomeItem icon={Zap} text="Unknown identification: 10% → 90%+ (ML-powered)" />
          <OutcomeItem icon={CheckCircle2} text="Data usability: 30% → 95%+ screening data" />
          <OutcomeItem icon={TrendingUp} text="SMILES completion: 50.5% → 100%" />
          <OutcomeItem icon={Shield} text="Transformation manual: 40-60 hrs/yr → 5-10 hrs/yr" />
          <OutcomeItem icon={Cloud} text="Regulatory lag: 2-4 weeks → 1-2 hours" />
          <OutcomeItem icon={BarChart3} text="Data transformation error rate: <1% (validated)" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Target className="w-8 h-8 mr-3" />
          Recommended Path: 2B (Hybrid + Automation)
        </h3>
        <div className="space-y-3 text-blue-50">
          <RecommendationItem number="1" text="Phase 1 (Month 8): Migrate data, deploy ML identification, standardize transformations, preserve UI" />
          <RecommendationItem number="2" text="Solves Critical Issue: 70% unknown compounds identified automatically via ML" />
          <RecommendationItem number="3" text="Data Quality Foundation: Complete SMILES data + technique-specific transformation scripts" />
          <RecommendationItem number="4" text="Phase 2 (Month 15): Real-time streaming, full automation, platform independence" />
          <RecommendationItem number="5" text="Result: 30% useful data → 95%+ useful data with consistent quality assurance" />
        </div>
      </div>
    </div>
  );
}

function ScenarioASection({ expandedSections, toggleSection }: { expandedSections: Record<string, boolean>, toggleSection: (section: string) => void }) {
  const requirementGroups = [
    { id: 'chem', title: 'Chemical Registration & Management', reqs: '1-8', data: requirementsData.slice(0, 8), icon: Database },
    { id: 'upload', title: 'Data Upload & Processing', reqs: '9-16B', data: requirementsData.slice(8, 24), icon: Cloud },
    { id: 'search', title: 'Search & Data Discovery', reqs: '17-23', data: requirementsData.slice(24, 31), icon: Target },
    { id: 'sample', title: 'Sample Management', reqs: '24-31', data: requirementsData.slice(31, 39), icon: Users },
    { id: 'regulatory', title: 'Regulatory & Compliance', reqs: '32-38', data: requirementsData.slice(39, 46), icon: Shield },
    { id: 'ux', title: 'User Experience', reqs: '39-45', data: requirementsData.slice(46, 53), icon: Lightbulb },
    { id: 'collab', title: 'Collaboration & Audit', reqs: '46-51', data: requirementsData.slice(53, 59), icon: Users },
    { id: 'perf', title: 'Performance & Security', reqs: '52-67', data: requirementsData.slice(59, 75), icon: Zap },
  ];

  return (
    <div className="space-y-8 animate-slideUp">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Scenario A: Complete Replacement</h2>
        <p className="text-slate-600 text-lg">Build entirely new system with modern technology and ML intelligence capabilities</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <StatCard label="Total Requirements" value="107" color="blue" />
        <StatCard label="Phase 1 (Core)" value="67" color="green" />
        <StatCard label="Phase 2 (ML+Platform)" value="40" color="purple" />
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3">Phase 1: Core System Build (Requirements 1-67)</h3>
        <p className="text-slate-700 mb-4">67 requirements covering all essential functionality with manual data uploads.</p>
        <div className="space-y-2">
          {requirementGroups.map(group => (
            <RequirementGroupWithTable key={group.id} {...group} expanded={expandedSections[group.id]} toggle={() => toggleSection(group.id)} />
          ))}
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-purple-600" />
          Phase 2: ML + Platform Independence (OPTIONAL - Requirements 144-182 + 154A)
        </h3>
        <p className="text-slate-700 mb-4">40 additional requirements for ML-powered unknown identification and vendor independence.</p>
        <div className="space-y-2">
          <RequirementGroupWithTable
            id="ml"
            title="Unknown Compound Identification (ML)"
            reqs="144-162 + 154A"
            data={requirementsData.slice(143, 162)}
            icon={Zap}
            expanded={expandedSections['ml']}
            toggle={() => toggleSection('ml')}
          />
          <RequirementGroupWithTable
            id="smiles"
            title="SMILES Structural Data Completion"
            reqs="163-172"
            data={requirementsData.slice(162, 172)}
            icon={Database}
            expanded={expandedSections['smiles']}
            toggle={() => toggleSection('smiles')}
          />
          <RequirementGroupWithTable
            id="platform"
            title="Platform Independence & Vendor Mitigation"
            reqs="173-182"
            data={requirementsData.slice(172, 182)}
            icon={Shield}
            expanded={expandedSections['platform']}
            toggle={() => toggleSection('platform')}
          />
        </div>
      </div>
    </div>
  );
}

function ScenarioBSection({ expandedSections, toggleSection }: { expandedSections: Record<string, boolean>, toggleSection: (section: string) => void }) {
  return (
    <div className="space-y-8 animate-slideUp">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Scenario B: Hybrid Approach (RECOMMENDED)</h2>
        <p className="text-slate-600 text-lg">Keep Dotmatics UI, replace backend with Snowflake, add ML intelligence layer</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <StatCard label="Total Requirements" value="76" color="blue" />
        <StatCard label="Phase 1 (Migrate+API)" value="26" color="green" />
        <StatCard label="Phase 2 (Automation)" value="50" color="purple" />
        <StatCard label="User Impact" value="Zero" color="red" />
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
          <Database className="w-6 h-6 mr-2 text-cyan-600" />
          Phase 1: Database Migration + API Layer (26 requirements)
        </h3>
        <p className="text-slate-700 mb-4">Migrate to Snowflake and build API middleware layer - all while keeping Dotmatics UI completely unchanged.</p>

        <div className="space-y-2">
          <RequirementGroupWithTable
            id="mapping"
            title="Data Mapping & Migration"
            reqs="68-73"
            data={requirementsData.slice(67, 73)}
            icon={RefreshCw}
            expanded={expandedSections['mapping']}
            toggle={() => toggleSection('mapping')}
          />
          <RequirementGroupWithTable
            id="snowflake-opt"
            title="Snowflake Optimization"
            reqs="74-79"
            data={requirementsData.slice(73, 79)}
            icon={Settings}
            expanded={expandedSections['snowflake-opt']}
            toggle={() => toggleSection('snowflake-opt')}
          />
          <RequirementGroupWithTable
            id="api"
            title="API Layer Development"
            reqs="80-85"
            data={requirementsData.slice(79, 85)}
            icon={Link}
            expanded={expandedSections['api']}
            toggle={() => toggleSection('api')}
          />
          <RequirementGroupWithTable
            id="dotmatics-ui"
            title="Dotmatics UI Integration"
            reqs="86-93"
            data={requirementsData.slice(85, 93)}
            icon={Monitor}
            expanded={expandedSections['dotmatics-ui']}
            toggle={() => toggleSection('dotmatics-ui')}
          />
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
        <div className="flex items-start">
          <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h4 className="font-bold text-green-900 mb-2">Key Benefit: ZERO User Impact</h4>
            <p className="text-green-800">
              Users see absolutely no change - same Dotmatics interface they're familiar with. All improvements happen behind the scenes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
          <Zap className="w-6 h-6 mr-2 text-purple-600" />
          Phase 2: Data Automation Enhancement (OPTIONAL - Requirements 94-143)
        </h3>
        <p className="text-slate-700 mb-4">50 automation requirements. Streamlit forms embedded as iframe popup in Dotmatics UI.</p>
        <div className="space-y-2">
          <RequirementGroupWithTable
            id="datacatalog-b"
            title="Data Catalog & Discovery"
            reqs="94-99"
            data={requirementsData.slice(93, 99)}
            icon={FolderSearch}
            expanded={expandedSections['datacatalog-b']}
            toggle={() => toggleSection('datacatalog-b')}
          />
          <RequirementGroupWithTable
            id="etl-b"
            title="ETL Orchestration"
            reqs="100-109"
            data={requirementsData.slice(99, 109)}
            icon={Workflow}
            expanded={expandedSections['etl-b']}
            toggle={() => toggleSection('etl-b')}
          />
          <RequirementGroupWithTable
            id="pipelines-b"
            title="Automated Pipelines"
            reqs="110-124"
            data={requirementsData.slice(109, 124)}
            icon={Activity}
            expanded={expandedSections['pipelines-b']}
            toggle={() => toggleSection('pipelines-b')}
          />
          <RequirementGroupWithTable
            id="streamlit-b"
            title="Embedded Streamlit UI"
            reqs="125-139"
            data={requirementsData.slice(124, 139)}
            icon={Gauge}
            expanded={expandedSections['streamlit-b']}
            toggle={() => toggleSection('streamlit-b')}
          />
          <RequirementGroupWithTable
            id="bi-b"
            title="BI & Reporting"
            reqs="140-143"
            data={requirementsData.slice(139, 143)}
            icon={BarChart3}
            expanded={expandedSections['bi-b']}
            toggle={() => toggleSection('bi-b')}
          />
        </div>
      </div>
    </div>
  );
}

function MetricsSection() {
  return (
    <div className="space-y-8 animate-slideUp">
      <div>
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Success Metrics</h2>
        <p className="text-slate-600 text-lg">Resource-dependent targets for measuring project success</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <MetricCard
          title="Unknown Identification Rate"
          target="Current 10% → Phase 1: 80-90% → Phase 2: 90%+"
          measurement="ML model accuracy tracking"
          icon={Zap}
          color="from-amber-500 to-orange-500"
        />
        <MetricCard
          title="Data Usability"
          target="Current 30% → Phase 1: 80% → Phase 2: 95%+"
          measurement="Screening data linkage rate"
          icon={CheckCircle2}
          color="from-green-500 to-emerald-500"
        />
        <MetricCard
          title="SMILES Completeness"
          target="Current 50.5% → Phase 1: 100%"
          measurement="Chemical registry structure coverage"
          icon={AlertCircle}
          color="from-blue-500 to-cyan-500"
        />
        <MetricCard
          title="Transformation Manual Effort"
          target="Current 40-60 hrs/yr → Phase 1: 15-20 → Phase 2: 5-10"
          measurement="Time tracking per upload"
          icon={TrendingUp}
          color="from-purple-500 to-pink-500"
        />
        <MetricCard
          title="Transformation Error Rate"
          target="Current: High (manual) → Phase 1: <5% → Phase 2: <1%"
          measurement="Validation audit results"
          icon={Shield}
          color="from-red-500 to-rose-500"
        />
        <MetricCard
          title="Technique-Specific Scripts"
          target="Current: 0 → Phase 1: 3 (GC/LC/HS) → Phase 2: 5+"
          measurement="Script repository count"
          icon={Users}
          color="from-cyan-500 to-blue-500"
        />
      </div>

      <div className="bg-gradient-to-br from-slate-700 to-slate-600 text-white rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6">Technology Stack Recommendations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <TechStack title="Frontend" items={['React/Vue.js', 'Bootstrap/Tailwind CSS']} />
          <TechStack title="Backend" items={['Python/Java REST APIs']} />
          <TechStack title="Database" items={['Snowflake']} />
          <TechStack title="Search" items={['Snowflake full-text / Lucene']} />
          <TechStack title="Chemistry" items={['RDKit']} />
          <TechStack title="Authentication" items={['LDAP/SAML + Active Directory']} />
          <TechStack title="Phase 2 Tools" items={['Apache Airflow', 'Atlan/Collibra', 'Streamlit', 'PowerBI/Tableau']} />
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
        <ol className="space-y-3">
          <NextStep number="1" text="Executive Approval → Choose recommended path (2B)" />
          <NextStep number="2" text="Detailed Planning → Create work breakdown structure" />
          <NextStep number="3" text="Team Assembly → Allocate resources" />
          <NextStep number="4" text="Phase 1 Start → Begin database migration" />
          <NextStep number="5" text="Phase 2 Decision → After Phase 1 stabilization" />
        </ol>
      </div>
    </div>
  );
}

function RequirementGroupWithTable({ id, title, reqs, data, icon: Icon, expanded, toggle }: any) {
  const isPhase2 = id.includes('datacatalog') || id.includes('etl') || id.includes('pipelines') || id.includes('streamlit') || id.includes('bi');
  const isScenarioBPhase1 = id.includes('mapping') || id.includes('snowflake-opt') || id.includes('api') || id.includes('dotmatics-ui');

  const colorScheme = isPhase2 ? {
    border: 'border-purple-200 hover:border-purple-400',
    icon: 'text-purple-600',
    badge: 'bg-purple-100 text-purple-700',
    hover: 'hover:bg-purple-50'
  } : isScenarioBPhase1 ? {
    border: 'border-cyan-200 hover:border-cyan-400',
    icon: 'text-cyan-600',
    badge: 'bg-cyan-100 text-cyan-700',
    hover: 'hover:bg-cyan-50'
  } : {
    border: 'border-slate-200 hover:border-blue-300',
    icon: 'text-blue-600',
    badge: 'bg-blue-100 text-blue-700',
    hover: 'hover:bg-slate-50'
  };

  return (
    <div className={`border ${colorScheme.border} rounded-lg overflow-hidden transition-all duration-200`}>
      <button
        onClick={toggle}
        className={`w-full flex items-center justify-between p-4 bg-white ${colorScheme.hover} transition-colors`}
      >
        <div className="flex items-center">
          <Icon className={`w-5 h-5 mr-3 ${colorScheme.icon}`} />
          <span className="font-semibold text-slate-900">{title}</span>
          <span className={`ml-3 px-2 py-1 ${colorScheme.badge} rounded text-xs font-medium`}>
            Req {reqs} ({data.length})
          </span>
        </div>
        {expanded ? <ChevronDown className="w-5 h-5 text-slate-400" /> : <ChevronRight className="w-5 h-5 text-slate-400" />}
      </button>
      {expanded && (
        <div className="bg-slate-50 border-t border-slate-200 animate-slideDown overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-200">
              <tr>
                <th className="px-3 py-2 text-left font-semibold text-slate-700 w-8">#</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">Requirement</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">Implementation Approach</th>
                <th className="px-3 py-2 text-left font-semibold text-slate-700">Simple Example</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {data.map((req: any) => (
                <tr key={req.id} className="hover:bg-white transition-colors">
                  <td className="px-3 py-3 text-slate-600 font-medium">{req.id}</td>
                  <td className="px-3 py-3 text-slate-700">{req.requirement}</td>
                  <td className="px-3 py-3 text-slate-600">{req.implementation}</td>
                  <td className="px-3 py-3 text-slate-600">{req.example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// Helper Components
function ScenarioCard({ title, subtitle, icon: Icon, color, description, features }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className={`bg-gradient-to-r ${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 mb-3">{subtitle}</p>
      <p className="text-slate-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start text-sm text-slate-600">
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProblemItem({ text }: { text: string }) {
  return (
    <li className="flex items-start text-slate-700">
      <X className="w-5 h-5 mr-2 text-red-500 flex-shrink-0 mt-0.5" />
      <span>{text}</span>
    </li>
  );
}

function PathRow({ path, scenario, phase1, phase2, reduction, bestFor, highlight }: any) {
  return (
    <tr className={`${highlight ? 'bg-yellow-50 font-semibold' : 'hover:bg-slate-50'} transition-colors`}>
      <td className="px-4 py-3">{path}</td>
      <td className="px-4 py-3">{scenario}</td>
      <td className="px-4 py-3 text-sm">{phase1}</td>
      <td className="px-4 py-3 text-sm">{phase2}</td>
      <td className="px-4 py-3">{reduction}</td>
      <td className="px-4 py-3">{bestFor}</td>
    </tr>
  );
}

function OutcomeItem({ icon: Icon, text }: any) {
  return (
    <div className="flex items-start">
      <Icon className="w-5 h-5 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
      <span className="text-slate-700">{text}</span>
    </div>
  );
}

function RecommendationItem({ number, text }: { number: string, text: string }) {
  return (
    <div className="flex items-start">
      <div className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0">
        {number}
      </div>
      <span>{text}</span>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
  const colors: Record<string, string> = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-pink-500',
  };
  return (
    <div className={`bg-gradient-to-br ${colors[color]} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}

function AutomationFeature({ title, reqs, description }: any) {
  return (
    <div className="bg-white border border-purple-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
      <p className="text-xs text-purple-600 mb-2">Requirements {reqs}</p>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  );
}


function MetricCard({ title, target, measurement, icon: Icon, color }: any) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <div className={`bg-gradient-to-r ${color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-slate-800 mb-3">{target}</div>
      <p className="text-sm text-slate-600">
        <span className="font-medium">Measurement:</span> {measurement}
      </p>
    </div>
  );
}

function TechStack({ title, items }: { title: string, items: string[] }) {
  return (
    <div>
      <h4 className="font-semibold mb-2 text-blue-200">{title}</h4>
      <ul className="space-y-1">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function NextStep({ number, text }: { number: string, text: string }) {
  return (
    <li className="flex items-start">
      <div className="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 flex-shrink-0">
        {number}
      </div>
      <span className="pt-1">{text}</span>
    </li>
  );
}

export default App;
