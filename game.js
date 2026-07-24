const { useState } = React;

function OfficeGame() {
    const [budget, setBudget] = useState(10000);
    const [efficiency, setEfficiency] = useState(20);
    
    // Departments
    const departments = [
        {
            id: 'support',
            title: 'Customer Support',
            bottleneck: 'Flooded with repetitive emails.',
            solution: 'AI Support Auto-Responder',
            cost: 1500,
            roi: 40,
            applied: false
        },
        {
            id: 'finance',
            title: 'Invoicing & Finance',
            bottleneck: 'Manual data entry and copy-pasting.',
            solution: 'AI Invoice Extractor',
            cost: 1200,
            roi: 35,
            applied: false
        },
        {
            id: 'sales',
            title: 'Sales Follow-up',
            bottleneck: 'Leads forgotten, slow response.',
            solution: 'AI Lead Nurture Bot',
            cost: 2000,
            roi: 50,
            applied: false
        },
        {
            id: 'social',
            title: 'Social Media',
            bottleneck: 'Struggling to write posts daily.',
            solution: 'AI Content Scheduler',
            cost: 800,
            roi: 25,
            applied: false
        }
    ];

    const [deps, setDeps] = useState(departments);

    const toggleSolution = (index) => {
        const dep = deps[index];
        const newDeps = [...deps];

        if (dep.applied) {
            // Remove solution
            newDeps[index].applied = false;
            setDeps(newDeps);
            setBudget(prev => prev + dep.cost);
            setEfficiency(prev => Math.max(20, prev - dep.roi));
        } else {
            // Apply solution if budget allows
            if (budget < dep.cost) return;
            newDeps[index].applied = true;
            setDeps(newDeps);
            setBudget(prev => prev - dep.cost);
            setEfficiency(prev => Math.min(100, prev + dep.roi));
        }
    };

    return (
        <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}>Office Optimization Simulator</h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Click any solution to toggle it ON or OFF and test different budget strategies.</p>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ padding: '1rem 1.5rem', background: 'rgba(33, 150, 242, 0.1)', borderRadius: '8px', border: '1px solid rgba(33, 150, 242, 0.2)' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Remaining Budget</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: budget > 0 ? 'var(--brand-primary)' : 'var(--text-muted)' }}>${budget.toLocaleString()}</p>
                    </div>
                    <div style={{ padding: '1rem 1.5rem', background: 'rgba(78, 242, 196, 0.1)', borderRadius: '8px', border: '1px solid rgba(78, 242, 196, 0.2)' }}>
                        <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Efficiency Score</p>
                        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: efficiency >= 90 ? '#4EF2C4' : 'var(--brand-secondary)' }}>{efficiency}%</p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {deps.map((dep, idx) => (
                    <div key={dep.id} style={{ 
                        padding: '1.5rem', 
                        borderRadius: '12px', 
                        border: '1px solid',
                        borderColor: dep.applied ? 'var(--brand-secondary)' : 'var(--border-color)',
                        background: dep.applied ? 'rgba(78, 242, 196, 0.08)' : 'var(--bg-main)',
                        transition: 'all 0.3s ease',
                        display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)', fontFamily: 'Outfit, sans-serif' }}>{dep.title}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                                {dep.applied ? "✅ Fully Optimized" : `⚠️ Bottleneck: ${dep.bottleneck}`}
                            </p>
                        </div>
                        <div style={{ marginTop: 'auto' }}>
                            <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{dep.solution}</p>
                            <button 
                                onClick={() => toggleSolution(idx)}
                                disabled={!dep.applied && budget < dep.cost}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    cursor: !dep.applied && budget < dep.cost ? 'not-allowed' : 'pointer',
                                    background: dep.applied ? 'rgba(247, 5, 5, 0.15)' : (budget >= dep.cost ? 'var(--brand-gradient)' : 'var(--bg-accent)'),
                                    color: dep.applied ? '#F70505' : (!dep.applied && budget < dep.cost ? 'var(--text-muted)' : '#fff'),
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                {dep.applied ? 'Remove Solution' : `Apply for $${dep.cost}`}
                            </button>
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
