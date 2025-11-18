import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Target, Lightbulb, CheckCircle2, AlertCircle, TrendingUp, Database, Cloud, Zap, Shield, Users, BarChart3, Menu, X, ArrowRight, ArrowDown, GitBranch, FolderSearch, Workflow, Activity, Gauge, Table, RefreshCw, Settings, Link, Monitor, Beaker, ClipboardList, Search } from 'lucide-react';
import { requirementsData } from './data/requirements';
import { DonutChart, MetricCard, HorizontalBarChart, ProgressBar } from './components/InteractiveCharts';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [selectedPainPoint, setSelectedPainPoint] = useState<number | null>(null);

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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6 mb-4 shadow-lg">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
            <Beaker className="w-5 h-5 mr-2 text-blue-600" />
            Current System Inventory (November 13, 2025)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard
              icon={<Database className="w-5 h-5 text-blue-600" />}
              label="Total Chemicals"
              value="12,561"
              subtitle="Growing inventory"
              trend="up"
              trendValue="+100/year"
              color="border-blue-500"
            />
            <MetricCard
              icon={<CheckCircle2 className="w-5 h-5 text-green-600" />}
              label="With SMILES"
              value="6,346"
              subtitle="50.5% complete"
              color="border-green-500"
            />
            <MetricCard
              icon={<AlertCircle className="w-5 h-5 text-orange-600" />}
              label="Without SMILES"
              value="6,215"
              subtitle="49.5% blocked"
              alert
              color="border-orange-500"
            />
            <MetricCard
              icon={<Link className="w-5 h-5 text-purple-600" />}
              label="Active Samples"
              value="162"
              subtitle="SLIMS linked"
              color="border-purple-500"
            />
          </div>

          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <h5 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
              <Search className="w-4 h-4 mr-2 text-red-600" />
              Screening Results Analysis
            </h5>
            <DonutChart
              segments={[
                {
                  label: 'Unknown (U_*)',
                  value: 4126,
                  color: '#ef4444',
                  icon: <AlertCircle className="w-4 h-4 text-red-600" />
                },
                {
                  label: 'Identified & Linked',
                  value: 1734,
                  color: '#22c55e',
                  icon: <CheckCircle2 className="w-4 h-4 text-green-600" />
                }
              ]}
              centerLabel="Total"
              centerValue="5,860"
            />
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h5 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
              <Activity className="w-4 h-4 mr-2 text-slate-700" />
              Operational Workload
            </h5>
            <div className="space-y-4">
              <ProgressBar
                label="Manual Data Entry (Annual)"
                value={25}
                max={100}
                color="bg-green-500"
                showPercentage={false}
              />
              <div className="text-xs text-slate-600 -mt-2 ml-1">17-33 hrs/year - Efficient ✓</div>

              <ProgressBar
                label="Data Transformation (Annual)"
                value={50}
                max={100}
                color="bg-amber-500"
                showPercentage={false}
              />
              <div className="text-xs text-amber-700 -mt-2 ml-1 font-medium">40-60 hrs/year - Manual Process ⚠️</div>

              <ProgressBar
                label="Unknown Compound Backlog"
                value={2625}
                max={3000}
                color="bg-red-500"
              />
              <div className="text-xs text-red-700 -mt-2 ml-1 font-medium">2,625 hours (~1.26 FTE-years) 🚨</div>
            </div>
          </div>
        </div>

        {/* Critical Issues Summary */}
        <div className="mt-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-2 border-red-200 rounded-xl p-6 shadow-lg">
          <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
            <ClipboardList className="w-5 h-5 mr-2 text-red-600" />
            Critical Issues & Pain Points Summary
            <span className="ml-3 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </h4>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h5 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                <Gauge className="w-4 h-4 mr-2 text-red-600" />
                Issues by Severity
              </h5>
              <DonutChart
                segments={[
                  { label: 'Foundational', value: 2, color: '#ec4899' },
                  { label: 'Strategic', value: 2, color: '#f97316' },
                  { label: 'Critical', value: 1, color: '#ef4444' },
                  { label: 'Operational', value: 1, color: '#f59e0b' },
                  { label: 'Minimal', value: 1, color: '#22c55e' }
                ]}
                centerLabel="Issues"
                centerValue="7"
              />
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h5 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                Impact Analysis
              </h5>
              <HorizontalBarChart
                items={[
                  {
                    label: 'Data Transformation',
                    value: 50,
                    maxValue: 60,
                    color: 'bg-gradient-to-r from-pink-500 to-pink-600',
                    severity: 'critical'
                  },
                  {
                    label: 'Data Architecture',
                    value: 0,
                    maxValue: 100,
                    color: 'bg-gradient-to-r from-pink-500 to-pink-600',
                    severity: 'critical'
                  },
                  {
                    label: 'Unknown Compounds',
                    value: 4126,
                    maxValue: 5860,
                    color: 'bg-gradient-to-r from-red-500 to-red-600',
                    severity: 'critical'
                  },
                  {
                    label: 'SMILES Completion',
                    value: 6215,
                    maxValue: 12561,
                    color: 'bg-gradient-to-r from-orange-500 to-orange-600',
                    severity: 'high'
                  }
                ]}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded">FOUNDATIONAL</span>
                  <h5 className="font-bold text-slate-900">#1 Data Transformation</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 9A-16B (15)</span>
              </div>
              <div className="mb-2">
                <ProgressBar label="Current → Target" value={10} max={60} color="bg-pink-500" showPercentage={false} />
                <div className="text-xs text-slate-600 mt-1">40-60 hrs manual → &lt;10 hrs automated</div>
              </div>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> Standardized scripts · <strong>Impact:</strong> Process inconsistency, scalability limits
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-pink-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded">FOUNDATIONAL</span>
                  <h5 className="font-bold text-slate-900">#2 Data Architecture</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 68-99 (32)</span>
              </div>
              <div className="mb-2">
                <ProgressBar label="Current → Target" value={0} max={100} color="bg-pink-500" showPercentage={false} />
                <div className="text-xs text-slate-600 mt-1">No formal model → Complete ontology</div>
              </div>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> Snowflake + metadata · <strong>Impact:</strong> Limits interoperability & automation
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-red-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    CRITICAL
                  </span>
                  <h5 className="font-bold text-slate-900">#3 Unknown Compounds</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 144-162 (19)</span>
              </div>
              <div className="mb-2">
                <ProgressBar label="Current → Target" value={10} max={90} color="bg-red-500" showPercentage={false} />
                <div className="text-xs text-slate-600 mt-1">10% identified → 90%+ automated identification</div>
              </div>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> ML intelligence · <strong>Impact:</strong> 70% screening data unusable (4,126 unknowns, 2,625 hr backlog)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">STRATEGIC</span>
                  <h5 className="font-bold text-slate-900">#4 SMILES/Structures</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 163-172 (10)</span>
              </div>
              <div className="mb-2">
                <ProgressBar label="Current → Target" value={50.5} max={100} color="bg-orange-500" />
                <div className="text-xs text-slate-600 mt-1">6,346 complete, 6,215 missing</div>
              </div>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> Auto-completion · <strong>Impact:</strong> Blocks toxicology workflows
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-orange-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded">STRATEGIC</span>
                  <h5 className="font-bold text-slate-900">#5 Regulatory Lag</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 63, 102 (15)</span>
              </div>
              <div className="mb-2">
                <ProgressBar label="Reduction Target" value={85} max={100} color="bg-orange-500" showPercentage={false} />
                <div className="text-xs text-slate-600 mt-1">2-4 weeks → &lt;1 day (85% faster)</div>
              </div>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> MDC API + automation · <strong>Impact:</strong> Compliance risk
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded">OPERATIONAL</span>
                  <h5 className="font-bold text-slate-900">#6 Vendor Lock-in</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 173-182 (10)</span>
              </div>
              <p className="text-sm text-slate-700 mb-1">
                <span className="font-semibold">Current → Target:</span> Dotmatics-dependent → Flexible architecture
              </p>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> API abstraction + independence · <strong>Impact:</strong> Limited flexibility
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    MINIMAL
                  </span>
                  <h5 className="font-bold text-slate-900">#7 Data Entry</h5>
                </div>
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Req 3, 4, 6 (13)</span>
              </div>
              <div className="mb-2">
                <ProgressBar label="Efficiency Level" value={90} max={100} color="bg-green-500" />
                <div className="text-xs text-green-600 mt-1">17-33 hrs/year - Already efficient ✓</div>
              </div>
              <p className="text-xs text-slate-700 bg-slate-50 p-2 rounded">
                <strong>Solution:</strong> Optimize downstream (transformation) · <strong>Impact:</strong> Not a problem
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
          <div className="flex-1">
            <h4 className="font-bold text-amber-900 mb-3">Critical Foundation</h4>
            <p className="text-amber-800 mb-3">
              Core requirements address <span className="font-semibold">7 operational challenges</span>:
            </p>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li className="flex items-start">
                <span className="font-semibold mr-2">🟥</span>
                <span><span className="font-semibold">Data Transformation:</span> 40-60 hrs/year manual processes</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">🟥</span>
                <span><span className="font-semibold">Data Architecture/Ontology:</span> No formal model exists</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">🟧</span>
                <span><span className="font-semibold">SMILES Completion:</span> 49.5% missing structural data</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">🟧</span>
                <span><span className="font-semibold">Regulatory Lag:</span> 2-4 weeks delay in updates</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">🟨</span>
                <span><span className="font-semibold">Unknown Compounds:</span> 70% unusable (2,625 hr backlog)</span>
              </li>
            </ul>
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
        requirements = requirementsData.slice(0, 166);
        title = 'Path 1B: Phase 1+2 Complete Build (166 Requirements Total - 67 Phase 1 + 99 Phase 2)';
        break;
      case '2A':
        requirements = requirementsData.slice(67, 93);
        title = 'Path 2A: Phase 1 Database Migration + API (26 Requirements)';
        break;
      case '2B':
        requirements = requirementsData.slice(67, 249);
        title = 'Path 2B: Phase 1+2 Hybrid Complete (182 Requirements Total - 122 Phase 1 + 60 Phase 2)';
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
              <div className="text-sm font-medium mb-1">Current State - November 2025</div>
              <div className="text-xl font-bold">Pandora Toolbox (Dotmatics)</div>
              <div className="text-sm mt-1">12,561 chemicals • 70% unknown data • 49.5% missing SMILES • Manual processes</div>
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
                  <div className="text-xs mt-1 opacity-90">Total: 166 Req</div>
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
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">166 Req (67+99)</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1 + 2:</strong> Core + Advanced Features
                </div>
                <div className="text-xs text-slate-600">BI dashboards • ML intelligence • SMILES • Platform independence</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-green-600 font-bold">Data Usability: 30%→85%+ • Unknown ID: 10%→90%+</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Complete transformation</div>
                </div>
              </div>
            </div>

            {/* Scenario B Branch */}
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg text-center w-full">
                  <div className="font-bold">Scenario B ⭐ RECOMMENDED</div>
                  <div className="text-sm">Hybrid Approach</div>
                  <div className="text-xs mt-1 opacity-90">Total: 182 Req</div>
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
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">93 Req</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1:</strong> Core + Migration + API
                </div>
                <div className="text-xs text-slate-600">Keep Dotmatics UI • Modern backend • No ML yet</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500">Zero user impact • Manual processes remain</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Low-risk baseline</div>
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
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">182 Req (122+60)</span>
                </div>
                <div className="text-sm text-slate-700 mb-2">
                  <strong>Phase 1:</strong> Core + Migration + ML + SMILES (122)
                  <br />
                  <strong>Phase 2:</strong> Advanced Automation (60)
                </div>
                <div className="text-xs text-slate-600">Same UI • ML from Phase 1 • 100% SMILES • Full automation Phase 2</div>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <div className="text-xs text-green-600 font-bold">Ph1: 30%→80% data usable • Ph2: 80%→85%+ • 100+ hrs/yr saved</div>
                  <div className="text-xs font-medium text-blue-600">Best for: Zero user impact + maximum value</div>
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
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Build entirely new system with all features (166 req)</p>
              <p className="text-slate-700 mb-2"><strong>Phase 1:</strong> 67 core requirements • <strong>Phase 2:</strong> 99 advanced (BI, ML, SMILES, Independence)</p>
              <p className="text-slate-700 mb-2"><strong>Outcome:</strong> Data usability 30%→85%+ • Unknown ID 10%→90%+ • Manual work &lt;10 hrs/yr</p>
              <p className="text-slate-700"><strong>User Impact:</strong> Learn new interface • 100+ hours saved annually</p>
            </div>
          )}
          {selectedPath === '2A' && (
            <div>
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Core system + backend migration only (93 req = 67 core + 26 migration)</p>
              <p className="text-slate-700 mb-2"><strong>Phase 1 Only:</strong> Modern infrastructure, no ML, no automation</p>
              <p className="text-slate-700 mb-2"><strong>Outcome:</strong> Same data quality • Manual processes remain • Foundation for future</p>
              <p className="text-slate-700"><strong>User Impact:</strong> ZERO - same UI, same workflows, faster backend</p>
            </div>
          )}
          {selectedPath === '2B' && (
            <div>
              <p className="text-slate-700 mb-2"><strong>Approach:</strong> Full hybrid transformation (182 req = 122 Phase 1 + 60 Phase 2)</p>
              <p className="text-slate-700 mb-2"><strong>Phase 1 (122 req):</strong> 67 core + 26 migration + 19 ML + 10 SMILES → Data usability 30%→80%</p>
              <p className="text-slate-700 mb-2"><strong>Phase 2 (60 req):</strong> Advanced automation + BI + real-time pipelines → 80%→85%+ usability</p>
              <p className="text-slate-700 mb-2"><strong>Key Advantage:</strong> ML + SMILES deployed in Phase 1 (not deferred to Phase 2)</p>
              <p className="text-slate-700 mb-2"><strong>User Impact:</strong> Same Dotmatics UI throughout • 100+ hours saved annually • Zero training needed</p>
              <p className="text-green-600 font-bold mt-3">⭐ RECOMMENDED: Best balance of minimal risk, early intelligence, maximum ROI, zero user disruption</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function PainPointModal({ painPoint, onClose }: { painPoint: number; onClose: () => void }) {
  const painPointDetails = [
    {
      title: "Pain Point #1: Data Transformation",
      severity: "FOUNDATIONAL",
      color: "pink",
      overview: "Manual, ad-hoc data transformation processes lack standardization, logging, validation, and error recovery, creating data quality inconsistencies and limiting scalability.",
      challenge: "40-60 hrs/year manual processes",
      workflows: [
        { name: "Chemical SDF Uploads", time: "15 min per upload", issues: "No error handling, no documentation, poor scalability, no audit trail" },
        { name: "Screening Data (GC/LC/HS)", time: "1-2 hours per batch", issues: "100% manual, high error rate, low reproducibility" },
        { name: "Toxicology Data", time: "30-45 min per upload", issues: "95% auto, 5% manual, 50.5% coverage, no validation" },
        { name: "Text-Delimited Uploads", time: "15 min per upload", issues: "Admin-only, headers only validation, no data checks" }
      ],
      gaps: [
        "No technique scripts (Manual per-technique processing)",
        "No logging (No transformation audit trail)",
        "No validation framework (Ad-hoc validation quality)",
        "No error recovery (Manual workarounds)",
        "No rollback capability (Cannot revert data)",
        "No Excel converter (Manual plugin operation)",
        "No admin approval (No validation gates)"
      ],
      solution: "Build GC/LC/HS scripts (Req 9A-16B), Add transformation logging, Standardized validation, Rollback capability",
      requirements: "Req 9A-12A, 16A-16B (15 requirements)"
    },
    {
      title: "Pain Point #2: Data Architecture & Ontology Framework",
      severity: "FOUNDATIONAL",
      color: "pink",
      overview: "Current system lacks formal data architecture and semantic framework. No ontology exists, limiting interoperability, automated reasoning, and system evolution.",
      challenge: "No formal data model",
      missing: [
        "No formal Entity-Relationship diagram",
        "No data lineage mapping (where data comes from, how it flows)",
        "No semantic definitions (shared meaning across systems)",
        "NO ONTOLOGY FRAMEWORK (formal classification of concepts)",
        "No metadata standards (descriptions of field meanings)",
        "No cross-system integration layer"
      ],
      impact: [
        "Poor Architecture Creates: Manual workarounds, difficult maintenance, quality issues, inability to scale, lost business intelligence",
        "Good Architecture Enables: Automated data flow, easy maintenance, quality assurance, scalability, advanced analytics"
      ],
      ontologyValue: [
        "Unknown Compound Identification: 70% → 90% (ML + ontology reference)",
        "Regulatory Data Integration: 2-4 weeks → <1 day (MDC API + ontology)",
        "Data Quality & Validation: 95% → 99%+ (automated validation rules)",
        "SMILES Data Completion: 50.5% → 100% (auto-discovery via linked databases)",
        "Cross-System Integration: manual → automatic (ontology-defined standards)"
      ],
      solution: "Establish semantic framework, formal data models, metadata catalog, data lineage tracking",
      requirements: "Req 68-99, 140-143 (32 requirements)"
    },
    {
      title: "Pain Point #3: Unknown Compound Identification Crisis",
      severity: "CRITICAL",
      color: "red",
      overview: "70% of screening data (4,126 of 5,860 compounds) is scientifically unusable because unknown compounds cannot be identified. This represents the SINGLE LARGEST BARRIER to system value.",
      challenge: "70% data unusable • 2,625 hour backlog",
      currentState: [
        "Total unknowns: 4,126 compounds",
        "Identified by chemists: 400-600 (~10%)",
        "Partially analyzed: 200-300 (~5%)",
        "Flagged for review: 300-400 (~7%)",
        "Abandoned/Deprioritized: 2,700-3,300 (~70%)"
      ],
      effort: [
        "Per-compound analysis: 35-55 minutes",
        "Total backlog: 4,126 × 45 min = 2,625 hours",
        "Equivalent to: 1.26 FTE-years to clear",
        "Annual growth: 500-1,500 new unknowns/year",
        "Current resolution rate: 10% (backlog never clears)"
      ],
      workflow: [
        "Lab runs instrument → detects ~150 compounds",
        "Software matches known compounds → assigns CAS",
        "Unknown compounds → assigned temp ID (U_1050_234)",
        "Typical: 30% identified, 70% unknown",
        "Unknowns cannot be analyzed or reported",
        "Manual identification: 45 min per compound"
      ],
      solution: "ML-Based Unknown Identification: Train AI model on 10,000 known compounds, Real-time spectral matching to 50,000-compound library, Confidence scoring with automated approval rules (>95% confidence auto-approve), Expected outcome: 80-90% identification in Phase 1, 90%+ by Phase 2",
      requirements: "Req 144-162, 154A (19 requirements)"
    },
    {
      title: "Pain Point #4: Incomplete Structural Data (SMILES)",
      severity: "STRATEGIC",
      color: "orange",
      overview: "49.5% of chemicals (6,215 of 12,561) lack SMILES structural data, preventing association with toxicology data and limiting scientific analysis.",
      challenge: "6,215 chemicals missing SMILES",
      breakdown: [
        "Defined organic (~80%): Can have SMILES",
        "Polymeric (~15%): Generic representation",
        "Generic (~3%): Mineral oils, fatty acids",
        "Regulatory-only (~2%): Special handling"
      ],
      workflow: [
        "Assessment Phase: Iterate through 6,215 chemicals, determine type",
        "Data Collection (Organic 80%): Query external databases (PubChem, ChemSpider, DrugBank), Retrieve structure info, Verify & validate with RDKit",
        "Data Collection (Polymeric/Generic 20%): Define generic structure representation, Document methodology",
        "Validation Phase: Verify all SMILES chemically valid, Check for duplicates, Test structure-to-CAS linkage accuracy"
      ],
      effort: [
        "5 minutes average per chemical",
        "Total: 520 hours",
        "Timeline: 2-3 months",
        "Result: All 12,561 chemicals eligible for toxicology"
      ],
      solution: "Auto-completion via external databases, validation framework, standardization, property calculation",
      requirements: "Req 163-172 (10 requirements)"
    },
    {
      title: "Pain Point #5: Regulatory Data Integration",
      severity: "STRATEGIC",
      color: "orange",
      overview: "2-4 week lag in regulatory updates creates compliance risk and requires manual integration.",
      challenge: "2-4 weeks lag → target <1 day",
      workflow: [
        "Monitoring Phase: Monitor EU (ECHA, Europa.eu), Swiss (SUST), national sources, Track effective dates and timelines",
        "Compilation Phase: Create Excel summary for each regulatory change (regulation name/number, effective date, scope, SBL thresholds, previous vs new limits, source references)",
        "Validation Phase: Validate mapping to Dotmatics registry, Search registry by CAS and chemical name, Cross-reference new substances to existing chemicals",
        "Update Phase: Access ELN → Regulatory Update interface, Create experiment entry, Upload regulation mapping spreadsheet, Manual linking and field population, QA check",
        "Communication Phase: Notify relevant teams of changes, Update compliance guidance documents, Archive previous regulatory dataset"
      ],
      effort: [
        "3-5 updates annually",
        "2-3 hours per update",
        "2-4 week lag",
        "Annual effort: 9-15 hours"
      ],
      solution: "MDC Technology API integration (Req 63) → Real-time regulatory feed, <1-2 hour lag, Automated pipeline (Req 102)",
      requirements: "Req 63, 102 (15 requirements)"
    },
    {
      title: "Pain Point #6: Platform Dependency (Vendor Lock-in)",
      severity: "OPERATIONAL",
      color: "amber",
      overview: "System remains linked to single vendor (Dotmatics) for data entry and reporting, making future technical changes more complex.",
      challenge: "Dotmatics-dependent",
      risks: [
        "Limited flexibility for future technical changes",
        "Dependency on vendor roadmap and priorities",
        "Potential licensing cost increases",
        "Difficulty integrating with other systems",
        "Constraints on customization and enhancement"
      ],
      solution: "API abstraction layer (Scenario B Phase 1), Platform independence options (Phase 2 - optional): Remove Dotmatics dependency, Alternate UI frameworks (React, Vue, custom), Data portability (CSV, JSON, XML), Open-source components (FOSS stack), Database flexibility (PostgreSQL, MySQL), Multi-cloud support (AWS, Azure, GCP), Container portability (Docker/Podman)",
      requirements: "Req 173-182 (10 requirements - Phase 2 optional)"
    },
    {
      title: "Pain Point #7: Data Entry Processes",
      severity: "MINIMAL",
      color: "green",
      overview: "Multiple data entry methods are used effectively (17-33 hours/year), representing routine operational efficiency NOT a significant pain point. However, the absence of standardized transformation procedures for ingested data creates downstream quality issues.",
      challenge: "17-33 hrs/year - Already efficient",
      methods: [
        "Method 1 - Manual Single Entry: 10-15 min per chemical, 30-40 chemicals annually",
        "Method 2 - Bulk SDF Files: 15 min per upload, 1-77+ chemicals, 2-3 uploads annually",
        "Method 3 - Text-Delimited Upload: 15 min per upload, 1-100+ chemicals, 1-2 uploads annually",
        "Sample Data Entry: 25-35 sessions annually, 15 min per session, 6-9 hours/year",
        "Toxicology Data Entry: 10-15 sessions annually, 30-45 min per session, 5-15 hours/year"
      ],
      summary: [
        "Total sessions/year: 60-85",
        "Total annual hours: 17-33",
        "KEY FINDING: Manual data entry is NOT a significant operational burden",
        "Real pain points lie downstream in data transformation standardization and unknown compound handling"
      ],
      solution: "Optimize downstream transformation processes (not data entry itself)",
      requirements: "Req 3, 4, 6, 9A, 10B, 11A, 12A, 14, 16A, 16B, 39, 40, 44 (13 requirements)"
    }
  ];

  const detail = painPointDetails[painPoint - 1];
  const bgColor = `bg-${detail.color}-50`;
  const borderColor = `border-${detail.color}-500`;
  const textColor = `text-${detail.color}-900`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${bgColor} border-b-4 ${borderColor} p-6 sticky top-0 z-10`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className={`text-2xl font-bold ${textColor} mb-2`}>{detail.title}</h2>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 bg-${detail.color}-200 ${textColor} text-sm font-bold rounded-full`}>
                  {detail.severity}
                </span>
                <span className="text-sm text-slate-600">{detail.requirements}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-50 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Overview</h3>
            <p className="text-slate-700 leading-relaxed">{detail.overview}</p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-slate-900 mb-2">Challenge</h4>
            <p className="text-slate-700">{detail.challenge}</p>
          </div>

          {detail.currentState && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Current State</h3>
              <ul className="space-y-2">
                {detail.currentState.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail.missing && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">What's Missing</h3>
              <ul className="space-y-2">
                {detail.missing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">❌</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail.workflows && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Current Workflows</h3>
              <div className="space-y-3">
                {detail.workflows.map((workflow, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-lg">
                    <div className="font-semibold text-slate-900">{workflow.name}</div>
                    <div className="text-sm text-slate-600 mt-1">Time: {workflow.time}</div>
                    <div className="text-sm text-red-600 mt-1">Issues: {workflow.issues}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.workflow && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Workflow</h3>
              <ul className="space-y-2">
                {detail.workflow.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">{idx + 1}.</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail.gaps && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Critical Gaps</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {detail.gaps.map((gap, idx) => (
                  <div key={idx} className="bg-red-50 p-2 rounded text-sm text-slate-700 border-l-2 border-red-400">
                    {gap}
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.effort && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Effort & Impact</h3>
              <div className="bg-amber-50 p-4 rounded-lg space-y-2">
                {detail.effort.map((item, idx) => (
                  <div key={idx} className="text-slate-700">
                    <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.methods && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Data Entry Methods</h3>
              <ul className="space-y-2">
                {detail.methods.map((method, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail.summary && (
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-2">Summary</h4>
              <ul className="space-y-1">
                {detail.summary.map((item, idx) => (
                  <li key={idx} className="text-slate-700 text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {detail.breakdown && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Breakdown</h3>
              <ul className="space-y-2">
                {detail.breakdown.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detail.impact && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Impact</h3>
              <div className="space-y-3">
                {detail.impact.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-lg text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.ontologyValue && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Ontology Value</h3>
              <div className="space-y-2">
                {detail.ontologyValue.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-green-50 p-2 rounded">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {detail.risks && (
            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-3">Risks</h3>
              <ul className="space-y-2">
                {detail.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span className="text-slate-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-900 text-lg mb-2">Solution</h3>
            <p className="text-slate-700 leading-relaxed">{detail.solution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExecutiveSection() {
  const [selectedPainPoint, setSelectedPainPoint] = useState<number | null>(null);

  return (
    <div className="space-y-8 animate-slideUp">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">Executive Summary</h2>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-300 rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Current Situation</h3>
        <p className="text-slate-700 mb-6 leading-relaxed">
          The current Pandora Toolbox (Dotmatics) system delivers reliable baseline chemical data management and efficient manual upload workflows, but several areas present clear opportunities for improvement:
        </p>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <AlertCircle className="w-6 h-6 mr-2 text-red-600" />
          Seven Key Pain Points
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div
            onClick={() => setSelectedPainPoint(1)}
            className="bg-white p-4 rounded-lg border-l-4 border-pink-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟥</span>
              <h4 className="font-bold text-slate-900">1. Data Transformation</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Manual and ad-hoc processes affecting consistency and scalability</p>
            <p className="text-xs text-pink-700 font-semibold">FOUNDATIONAL · 40-60 hrs/year manual</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>

          <div
            onClick={() => setSelectedPainPoint(2)}
            className="bg-white p-4 rounded-lg border-l-4 border-pink-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟥</span>
              <h4 className="font-bold text-slate-900">2. Data Architecture & Ontology</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">No formal data models, clear lineage, or semantic framework</p>
            <p className="text-xs text-pink-700 font-semibold">FOUNDATIONAL · Limits interoperability</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>

          <div
            onClick={() => setSelectedPainPoint(3)}
            className="bg-white p-4 rounded-lg border-l-4 border-red-600 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟧</span>
              <h4 className="font-bold text-slate-900">3. Unknown Compounds</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Significant expert effort required for identification</p>
            <p className="text-xs text-red-700 font-semibold">CRITICAL · 70% data unusable (4,126 unknowns, 2,625 hr backlog)</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>

          <div
            onClick={() => setSelectedPainPoint(4)}
            className="bg-white p-4 rounded-lg border-l-4 border-orange-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟧</span>
              <h4 className="font-bold text-slate-900">4. SMILES/Structure Completeness</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Half the chemical registry missing structural data</p>
            <p className="text-xs text-orange-700 font-semibold">STRATEGIC · 49.5% missing (6,215 chemicals)</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>

          <div
            onClick={() => setSelectedPainPoint(5)}
            className="bg-white p-4 rounded-lg border-l-4 border-orange-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟧</span>
              <h4 className="font-bold text-slate-900">5. Regulatory Data Integration</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Manual handling with 2-4 week lag creates compliance risk</p>
            <p className="text-xs text-orange-700 font-semibold">STRATEGIC · 2-4 weeks → target &lt;1 day</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>

          <div
            onClick={() => setSelectedPainPoint(6)}
            className="bg-white p-4 rounded-lg border-l-4 border-amber-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟨</span>
              <h4 className="font-bold text-slate-900">6. Platform Dependency</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Vendor lock-in limiting future technical flexibility</p>
            <p className="text-xs text-amber-700 font-semibold">OPERATIONAL · Dotmatics-dependent</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>

          <div
            onClick={() => setSelectedPainPoint(7)}
            className="bg-white p-4 rounded-lg border-l-4 border-green-500 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🟩</span>
              <h4 className="font-bold text-slate-900">7. Data Entry</h4>
            </div>
            <p className="text-sm text-slate-600 mb-2">Mostly manual aided with transformation scripts</p>
            <p className="text-xs text-green-700 font-semibold">MINIMAL · 17-33 hrs/year - Already efficient</p>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <Search className="w-3 h-3" /> Click for details
            </p>
          </div>
        </div>
      </div>

      {selectedPainPoint && (
        <PainPointModal
          painPoint={selectedPainPoint}
          onClose={() => setSelectedPainPoint(null)}
        />
      )}

      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Strategic Challenge</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-3">Current State</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                <span><strong>Data Usability:</strong> 30% actionable</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-red-500">●</span>
                <span><strong>Unknown ID:</strong> 10% identified</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">●</span>
                <span><strong>Manual Transformation:</strong> 40-60 hrs/year</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">●</span>
                <span><strong>Regulatory Lag:</strong> 2-4 weeks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500">●</span>
                <span><strong>SMILES:</strong> 50.5% complete</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold text-slate-900 mb-3">Target State</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span><strong>Data Usability:</strong> 85%+ actionable</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span><strong>Unknown ID:</strong> 90%+ identified</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span><strong>Manual Transformation:</strong> &lt;10 hrs/year</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span><strong>Regulatory Lag:</strong> &lt;1 day</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">●</span>
                <span><strong>SMILES:</strong> 100% complete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Solution Overview</h3>
        <p className="text-slate-700 mb-4">
          <strong>190 consolidated requirements</strong> across <strong>2 strategic scenarios</strong>:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border-2 border-amber-200 shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-amber-600" />
              Scenario A: Complete Replacement
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Phase 1: 67 core requirements</li>
              <li>• Phase 2: 99 optional (BI, ML, SMILES, Independence)</li>
              <li>• <strong>Total: 166 requirements</strong></li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-xl border-2 border-blue-300 shadow-md">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center">
              <Database className="w-5 h-5 mr-2 text-blue-600" />
              Scenario B: Hybrid ⭐ RECOMMENDED
            </h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Phase 1: 122 requirements (67 core + 26 migration + 19 ML + 10 SMILES)</li>
              <li>• Phase 2: 60 optional (50 advanced + 10 Independence)</li>
              <li>• <strong>Total: 182 requirements</strong></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl p-6 shadow-md">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Recommended Path: Scenario B (Hybrid)</h3>

        <div className="mb-6">
          <h4 className="text-lg font-bold text-blue-900 mb-3 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">1</span>
            Phase 1: Foundation + Intelligence
          </h4>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
            <h5 className="font-semibold text-slate-900 mb-2">What Gets Built:</h5>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Migrate PostgreSQL data → Snowflake</li>
              <li>• Build API middleware layer</li>
              <li>• Standardize data transformation (Req 9A-16B)</li>
              <li>• Deploy ML intelligence for unknowns (Req 144-162)</li>
              <li>• Complete SMILES data 50.5% → 100% (Req 163-172)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Result at Phase 1:</h5>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Data Usability: 30% → 80%</li>
              <li>• Unknown Identification: 10% → 70% (ML + manual verification)</li>
              <li>• Manual Transformation: 40-60 hrs → 20-25 hrs</li>
              <li>• Regulatory Lag: 2-4 weeks → 2-5 days</li>
              <li>• SMILES: 50.5% → 100% (one-time completion)</li>
              <li>• <strong>Users See:</strong> Same Dotmatics UI + faster processing</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold text-purple-900 mb-3 flex items-center">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">2</span>
            Phase 2: Advanced Automation (Optional)
          </h4>
          <div className="bg-white p-4 rounded-lg shadow-sm mb-3">
            <h5 className="font-semibold text-slate-900 mb-2">What Gets Added:</h5>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Real-time ETL pipelines (Req 100-124)</li>
              <li>• Advanced BI dashboards (Req 125-143)</li>
              <li>• ML model retraining & enhancement (Req 144-162)</li>
              <li>• Platform independence (Req 173-182)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h5 className="font-semibold text-green-900 mb-2">Result at Phase 2:</h5>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Data Usability: 80% → 85%+ (final ML improvements)</li>
              <li>• Unknown Identification: 70% → 90%+ (advanced ML + feedback loops)</li>
              <li>• Manual Transformation: 20-25 hrs → &lt;10 hrs (full automation)</li>
              <li>• Regulatory Lag: 2-5 days → &lt;1 day (MDC API)</li>
              <li>• SMILES: 100% (maintained from Phase 1)</li>
              <li>• <strong>Users See:</strong> Same UI + real-time data + advanced dashboards</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
          <CheckCircle2 className="w-6 h-6 mr-2 text-green-600" />
          Expected Business Value
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <OutcomeItem icon={Shield} text="Improved Compliance: Regulatory updates automated" />
          <OutcomeItem icon={CheckCircle2} text="Enhanced Science: 85%+ data usable for assessment" />
          <OutcomeItem icon={Zap} text="Operational Efficiency: 100+ hours saved annually" />
          <OutcomeItem icon={Cloud} text="Strategic Independence: Freedom from vendor lock-in (optional Phase 2)" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <Target className="w-8 h-8 mr-3" />
          Why Scenario B (Hybrid)?
        </h3>
        <div className="space-y-3 text-blue-50">
          <RecommendationItem number="1" text="Minimal Risk: Keep familiar Dotmatics UI (users see zero change)" />
          <RecommendationItem number="2" text="Modern Infrastructure: Snowflake backend (scalable, future-proof)" />
          <RecommendationItem number="3" text="Early Intelligence: ML deployed Phase 1 (70% unknown ID immediately)" />
          <RecommendationItem number="4" text="Complete Data: 100% SMILES by Phase 1 (not deferred)" />
          <RecommendationItem number="5" text="Flexible Options: Phase 2 is optional (can stop if needed, continue if beneficial)" />
          <RecommendationItem number="6" text="Result: 30% useful data → 80% (Phase 1) → 85%+ (Phase 2) with consistent quality" />
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
