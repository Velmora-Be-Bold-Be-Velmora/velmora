
export default function Cards({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', width: '200px' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
      <h3 style={{ marginTop: '0.5rem' }}>{title}</h3>
      <p style={{ textAlign: 'center' }}>{description}</p>
    </div>
  );
}