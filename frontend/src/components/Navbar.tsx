import { Users, Settings, AlertTriangle, Bell, ShieldCheck, FileText, LayoutDashboard } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, text: 'Dashboard', path: '/' },
  { icon: FileText, text: 'Risk Assessments', path: '/risk-assessments' },
  { icon: AlertTriangle, text: 'Issues', path: '/issues' },
  { icon: ShieldCheck, text: 'Third-Party Risks', path: '/third-party-risks' },
  { icon: Bell, text: 'Reports', path: '/reports' },
  { icon: Users, text: 'User Management', path: '/users' },
  { icon: Settings, text: 'Settings', path: '/settings' },
];

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-950 text-white p-6 flex flex-col space-y-4 rounded-tr-[32px] rounded-br-[32px]">
      <div className="flex items-center space-x-3 mb-8">
        <div className="bg-blue-500/20 p-2 rounded-xl">
          <ShieldCheck className="w-6 h-6 text-blue-500" />
        </div>
        <div className="text-xl font-bold">RiskGuard</div>
      </div>
      <nav className="flex flex-col space-y-1.5">
        {navItems.map((item) => (
          <button
            key={item.text}
            className="text-left hover:bg-white/10 px-4 py-3 rounded-2xl flex items-center space-x-3 transition-all duration-200 text-gray-300 hover:text-white"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.text}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
