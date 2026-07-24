const { useState } = React;

const DEPARTMENTS_DATA = [
    {
        id: 'support',
        title: 'Customer Support',
        bottleneck: 'Flooded with repetitive emails.',
        solution: 'AI Support Auto-Responder',
        cost: 1500,
        roi: 40,
        imgSad: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?auto=format&fit=crop&w=400&q=80',
        imgHappy: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
        applied: false
    },
    {
        id: 'finance',
        title: 'Invoicing & Finance',
        bottleneck: 'Manual data entry and copy-pasting.',
        solution: 'AI Invoice Extractor',
        cost: 1200,
        roi: 35,
        imgSad: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
        imgHappy: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
        applied: false
    },
    {
        id: 'sales',
        title: 'Sales Follow-up',
        bottleneck: 'Leads forgotten, slow response.',
        solution: 'AI Lead Nurture Bot',
        cost: 2000,
        roi: 50,
        imgSad: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80',
        imgHappy: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80',
        applied: false
    },
    {
        id: 'calendar',
        title: 'Calendar & Scheduling',
        bottleneck: 'Scattered Outlook, Google & CRM calendars causing double bookings.',
        solution: 'AI Multi-Calendar Auto-Sync',
        cost: 1000,
        roi: 30,
        imgSad: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80',
        imgHappy: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
        applied: false
    },
    {
        id: 'social',
        title: 'Social Media',
        bottleneck: 'Struggling to write posts daily.',
        solution: 'AI Content Scheduler',
        cost: 800,
        roi: 25,
        imgSad: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=400&q=80',
        imgHappy: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
        applied: false
    }
];

function OfficeGame() {
    const [budget, setBudget] = useState(10000);
    const [efficiency, setEfficiency] = useState(20);
    const [deps, setDeps] = useState(DEPARTMENTS_DATA);

    const toggleSolution = (index) => {
        const dep = deps[index];

        if (dep.applied) {
            // Remove solution
            setDeps(prev => prev.map((d, i) => i === index ? { ...d, applied: false } : d));
            setBudget(prev => prev + dep.cost);
            setEfficiency(prev => Math.max(20, prev - dep.roi));
        } else {
            // Apply solution if budget permits
            if (budget < dep.cost) return;
            setDeps(prev => prev.map((d, i) => i === index ? { ...d, applied: true } : d));
            setBudget(prev => prev - dep.cost);
            setEfficiency(prev => Math.min(100, prev + dep.roi));
        }
    };

    return (
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Office Optimization Simulator</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Click any card or button below to toggle AI solutions ON or OFF and optimize your office within budget.</p>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ padding: '1rem 1.5rem', background: 'rgba(33, 150, 242, 0.1)', borderRadius: '8px', border: '1px solid rgba(33, 150, 242, 0.2)' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Remaining Budget</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: budget > 0 ? 'var(--brand-primary)' : 'var(--text-muted)' }}>£{budget.toLocaleString()}</p>
                    </div>
                    <div style={{ padding: '1rem 1.5rem', background: 'rgba(78, 242, 196, 0.1)', borderRadius: '8px', border: '1px solid rgba(78, 242, 196, 0.2)' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Efficiency Score</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: efficiency >= 90 ? '#4EF2C4' : 'var(--brand-secondary)' }}>{efficiency}%</p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {deps.map((dep, idx) => (
                    <div 
                        key={dep.id} 
                        onClick={() => toggleSolution(idx)}
                        style={{ 
                            borderRadius: '12px', 
                            border: '2px solid',
                            borderColor: dep.applied ? 'var(--brand-secondary)' : 'var(--border-color)',
                            background: dep.applied ? 'rgba(78, 242, 196, 0.08)' : 'var(--bg-main)',
                            transition: 'all 0.3s ease',
                            cursor: (!dep.applied && budget < dep.cost) ? 'not-allowed' : 'pointer',
                            display: 'flex', flexDirection: 'column', overflow: 'hidden'
                        }}
                    >
                        <div style={{ height: '140px', width: '100%', overflow: 'hidden', position: 'relative' }}>
                            <img src={dep.applied ? dep.imgHappy : dep.imgSad} alt={dep.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease-in-out' }} />
                            {dep.applied && (
                                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(78, 242, 196, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.4s ease-in-out' }}>
                                    <span style={{ background: '#fff', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: 'bold', color: '#111', fontSize: '0.9rem', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>Optimized</span>
                                </div>
                            )}
                        </div>
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <div style={{ flex: 1 }}>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}>{dep.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: dep.applied ? 'var(--brand-secondary)' : 'var(--text-muted)', marginBottom: '1rem', fontWeight: dep.applied ? 'bold' : 'normal' }}>
                                    {dep.applied ? "✅ Fully Optimized" : `⚠️ Bottleneck: ${dep.bottleneck}`}
                                </p>
                            </div>
                            <div style={{ marginTop: 'auto' }}>
                                <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{dep.solution}</p>
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSolution(idx);
                                    }}
                                    disabled={!dep.applied && budget < dep.cost}
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        borderRadius: '8px',
                                        border: 'none',
                                        fontWeight: 'bold',
                                        cursor: !dep.applied && budget < dep.cost ? 'not-allowed' : 'pointer',
                                        background: dep.applied ? '#F70505' : (budget >= dep.cost ? 'var(--brand-gradient)' : 'var(--bg-accent)'),
                                        color: '#fff',
                                        transition: 'all 0.2s ease',
                                        boxShadow: dep.applied ? '0 4px 12px rgba(247, 5, 5, 0.3)' : '0 4px 12px rgba(33, 150, 242, 0.2)'
                                    }}
                                >
                                    {dep.applied ? '❌ Remove Solution' : `➕ Apply for £${dep.cost}`}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {efficiency >= 90 && (
                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(78, 242, 196, 0.1)', border: '1px solid #4EF2C4', borderRadius: '12px', textAlign: 'center' }}>
                    <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>🎉 Office Fully Optimized!</h3>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>You've transformed the business. Ready to do this in real life?</p>
                    <a href="#contact" style={{ display: 'inline-block', padding: '0.75rem 1.5rem', background: 'var(--brand-gradient)', color: '#fff', fontWeight: 'bold', textDecoration: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(33,150,242,0.3)' }}>Book Your Free Audit</a>
                </div>
            )}
        </div>
    );
}

const rootElement = document.getElementById('react-game-root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<OfficeGame />);
}
