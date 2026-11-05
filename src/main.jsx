import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Box, Check, ChevronDown, Menu, PackageCheck, ShieldCheck, Truck, X } from 'lucide-react';
import './style.css';

const products = [
  { id: 1, name: 'Carton format S', size: '20 × 15 × 10 cm', desc: 'Idéal pour petits objets, accessoires et commandes e-commerce.', price: 3.5, tag: 'Petit format', kind: 'small' },
  { id: 2, name: 'Carton format M', size: '30 × 25 × 20 cm', desc: 'Un format polyvalent pour emballer vos produits au quotidien.', price: 6, tag: 'Le plus demandé', kind: 'medium' },
  { id: 3, name: 'Carton format L', size: '45 × 35 × 30 cm', desc: 'Plus de place pour les colis volumineux et le déménagement.', price: 10, tag: 'Grand format', kind: 'large' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quantities, setQuantities] = useState({ 1: 10, 2: 10, 3: 5 });
  const phone = '+212770142096'; // Remplacez par votre numéro WhatsApp, sans + ni espaces.
  const order = (product) => {
    const qty = Math.max(1, Number(quantities[product.id]) || 1);
    const message = `Salam, bghit nطلب ${qty} carton(s) ${product.name} (${product.size}). Le prix affiché est ${product.price.toFixed(2)} DH/unité. Merci de confirmer disponibilité et livraison à Marrakech.`;
    window.open(`https://wa.me/${+212770142096}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  const orderAll = () => {
    const lines = products.filter(p => Number(quantities[p.id]) > 0).map(p => `${quantities[p.id]} x ${p.name}`);
    const message = `Salam, bghit devis pour:\n${lines.join('\n')}\nMerci de confirmer les prix et la livraison à Marrakech.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return <>
    <div className="topline"><span>Emballage simple, livraison sans prise de tête.</span><span className="topline-right">Marrakech & environs <span className="dot"/> Réponse rapide sur WhatsApp</span></div>
    <header className="header">
      <a className="brand" href="#accueil" aria-label="Atlas Carton accueil"><span className="brand-icon"><Box size={23}/></span><span>atlas<span className="brand-light">carton</span><small>EMBALLAGE & PROTECTION</small></span></a>
      <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Ouvrir le menu">{mobileOpen ? <X/> : <Menu/>}</button>
      <nav className={mobileOpen ? 'nav nav-open' : 'nav'}>
        <a href="#produits" onClick={() => setMobileOpen(false)}>Nos cartons</a><a href="#avantages" onClick={() => setMobileOpen(false)}>Pourquoi nous</a><a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        <a className="nav-cta" href="#produits" onClick={() => setMobileOpen(false)}>Voir les produits <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="accueil">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> VOTRE PARTENAIRE EMBALLAGE À MARRAKECH</div>
          <h1>Le bon carton.<br/><em>Le bon format.</em><br/>Tout simplement.</h1>
          <p className="hero-text">Des cartons pratiques pour vos colis, votre boutique ou votre déménagement. Choisissez votre format et demandez votre prix en quelques clics.</p>
          <div className="hero-actions"><a className="button button-dark" href="#produits">Découvrir les cartons <ArrowUpRight size={17}/></a><a className="text-link" href="#contact">Une question ? <span>Parlons-en</span></a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>A</span><span>C</span><span>+</span></div><div><strong>Simple & pratique</strong><small>Pour pros et particuliers</small></div><div className="proof-divider"/><div className="proof-check"><Check size={16}/><span>Demande de devis rapide</span></div></div>
        </div>
        <div className="hero-art" aria-label="Illustration de cartons d'emballage">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><span className="art-sticker">PACK<br/>SMART.</span>
          <div className="art-box art-box-back"><div className="box-top"/><div className="box-front"><span className="box-mark">AC<span> / </span>01</span><span className="box-stripe"/></div><div className="box-side"/></div>
          <div className="art-box art-box-mid"><div className="box-top"/><div className="box-front"><span className="box-mark">FRAGILE<br/><small>HANDLE WITH CARE</small></span><span className="box-stripe"/></div><div className="box-side"/></div>
          <div className="art-box art-box-front"><div className="box-top"/><div className="box-front"><span className="box-mark">ATLAS<br/><small>EMBALLAGE</small></span><span className="box-stamp">100%<br/>CARTON</span></div><div className="box-side"/></div>
          <div className="art-caption"><span className="caption-number">01</span><span>BIEN EMBALLÉ.<br/>BIEN PROTÉGÉ.</span></div>
          <div className="art-leaf leaf-one"/><div className="art-leaf leaf-two"/>
        </div>
        <div className="hero-bottom"><span>DES FORMATS POUR CHAQUE BESOIN</span><div className="bottom-line"/><a href="#produits">FAIRE DÉFILER <ChevronDown size={14}/></a></div>
      </section>

      <section className="benefits" id="avantages">
        <div className="benefit"><span className="benefit-icon"><PackageCheck size={21}/></span><div><strong>Formats pratiques</strong><p>Petits, moyens et grands cartons.</p></div></div>
        <div className="benefit"><span className="benefit-icon"><ShieldCheck size={21}/></span><div><strong>Protection au quotidien</strong><p>Pour emballer et transporter.</p></div></div>
        <div className="benefit"><span className="benefit-icon"><Truck size={21}/></span><div><strong>À Marrakech</strong><p>Demandez les options de livraison.</p></div></div>
      </section>

      <section className="products-section" id="produits">
        <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> LA SÉLECTION</div><h2>Des cartons qui<br/><em>font le travail.</em></h2></div><p>Choisissez le format qui vous convient. Les prix ci-dessous sont indicatifs : confirmez le tarif et le stock avec nous avant commande.</p></div>
        <div className="product-grid">{products.map((p, i) => <article className="product-card" key={p.id}>
          <div className={`product-visual visual-${p.kind}`}><span className="product-tag">{p.tag}</span><div className={`mini-box mini-${p.kind}`}><div className="mini-top"/><div className="mini-front"><span>AC<span className="slash"> / </span>{String(p.id).padStart(2,'0')}</span><i/></div><div className="mini-side"/></div><span className="visual-size">{p.size}</span></div>
          <div className="product-info"><div className="product-name-row"><h3>{p.name}</h3><span className="product-index">0{i+1}</span></div><p>{p.desc}</p><div className="size-line"><span>DIMENSIONS</span><strong>{p.size}</strong></div><div className="product-buy"><div className="price"><strong>{p.price.toLocaleString('fr-FR')} <small>DH</small></strong><span>/ unité · indicatif</span></div><label className="qty-label">Qté<input type="number" min="1" max="9999" value={quantities[p.id]} onChange={e => setQuantities({...quantities, [p.id]: e.target.value})}/></label></div><button className="order-button" onClick={() => order(p)}>Commander sur WhatsApp <ArrowUpRight size={16}/></button></div>
        </article>)}</div>
        <div className="custom-order"><div><span className="custom-icon"><Box size={22}/></span><div><strong>Besoin d’une grande quantité ou d’un autre format ?</strong><p>Expliquez-nous votre besoin et demandez un devis personnalisé.</p></div></div><button className="button button-light" onClick={orderAll}>Demander un devis <ArrowUpRight size={16}/></button></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line"/> ON VOUS ÉCOUTE</div><h2>On emballe<br/><em>votre idée ?</em></h2><p>Une question sur les formats, les quantités ou la livraison à Marrakech ? Envoyez-nous un message.</p><a className="button button-dark" href={`https://wa.me/${phone}?text=${encodeURIComponent('Salam, bghit des informations sur vos cartons d’emballage.')}`} target="_blank" rel="noreferrer">Écrire sur WhatsApp <ArrowUpRight size={17}/></a></div><div className="contact-note"><span className="note-quote">“</span><p>Le bon emballage commence par le bon choix.</p><span className="note-rule"/><small>ATLAS CARTON · MARRAKECH</small><div className="note-pattern"/></div></section>
    </main>
    <footer><a className="brand footer-brand" href="#accueil"><span className="brand-icon"><Box size={20}/></span><span>atlas<span className="brand-light">carton</span><small>EMBALLAGE & PROTECTION</small></span></a><span>© {new Date().getFullYear()} Atlas Carton. Tous droits réservés.</span><a href="#accueil">Retour en haut ↑</a></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
