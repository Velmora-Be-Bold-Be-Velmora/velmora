"use client";
import classes from './Home.module.css';
export default function OfferSection() {
  return <>
        <div className={classes.container_offer} >
            <div>
                <span style={{fontSize: '2.5rem', fontWeight: 'bold',color: 'var(--mantine-color-orange-8)'}}>FLAT $300 OFF</span>
            </div>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                <span style={{fontSize: '1.25rem', fontWeight: 'bold'}}>USE CODE</span> 
                <span style={{fontSize: '1.5rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #e0c663, #b1e7e9)',borderRadius: 'var(--mantine-radius-md)', padding: '0 0.5rem' }}>VELMORA300</span>
            </div>
        </div>
  </>;
}
