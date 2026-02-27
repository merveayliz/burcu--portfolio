const infoData = {
    cert: `
        <h4 style="color:var(--glass-blue); margin-bottom:10px;">Sertifikalar</h4>
        <ul style="list-style:none; font-size:0.9rem; line-height:2;">
            <li><i class="fas fa-certificate" style="color:var(--earth)"></i> MATLAB Fundamentals (MathWorks)</li>
            <li><i class="fas fa-certificate" style="color:var(--earth)"></i> VitrA Karo Akademi 2024-2025</li>
            <li><i class="fas fa-certificate" style="color:var(--earth)"></i> Çimsa Teknik Eğitim Sertifikası</li>
        </ul>
    `,
    thesis: `
        <h4 style="color:var(--glass-blue); margin-bottom:10px;">Araştırma & Tez</h4>
        <p style="font-size:0.95rem; opacity:0.8; line-height:1.6;">MOBI Research Centre (Belçika) bünyesinde piller ve ileri malzeme karakterizasyonu üzerine mikroskobik çalışmalar.</p>
    `,
    contact: `
        <h4 style="color:var(--glass-blue); margin-bottom:15px;">İletişime Geçin</h4>
        <div style="display:flex; flex-direction:column; gap:12px;">
            <a href="mailto:burcu55gunes@gmail.com" class="contact-link" style="text-decoration:none; background:rgba(0,212,255,0.05); color:#fff; padding:12px 20px; border-radius:12px; border:1px solid rgba(0,212,255,0.3); font-size:0.9rem;">
                <i class="fas fa-envelope" style="color:var(--glass-blue)"></i> burcu55gunes@gmail.com
            </a>
            <a href="https://linkedin.com/in/burcu-güneş-efil-1abba3255" target="_blank" class="contact-link" style="text-decoration:none; background:rgba(166,124,82,0.05); color:#fff; padding:12px 20px; border-radius:12px; border:1px solid rgba(166,124,82,0.3); font-size:0.9rem;">
                <i class="fab fa-linkedin" style="color:var(--earth)"></i> LinkedIn Profilini Görüntüle
            </a>
        </div>
    `
};

window.onload = () => {
    const line = document.getElementById('intro-line');
    const text = document.getElementById('intro-text');
    const card = document.getElementById('main-card');
    const intro = document.getElementById('intro-screen');

    setTimeout(() => { line.style.width = '100%'; }, 500);

    setTimeout(() => {
        text.style.transition = "1.5s cubic-bezier(0.16, 1, 0.3, 1)";
       
        text.style.transform = "translate(-28vw, -44vh) scale(0.35)"; 
        line.style.opacity = "0";
        
        intro.style.background = "transparent";
        intro.style.pointerEvents = "none";
        
        card.style.opacity = "1";
        card.style.transform = "scale(1) translateY(0)";
        
        document.body.style.overflowY = "auto";
    }, 2200);
};

function updateUI(type) {
    const area = document.getElementById('content-area');
    area.style.display = "block";
    area.innerHTML = infoData[type];

}
