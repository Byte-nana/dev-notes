export default function Profile({ image, name, title, isNew }) {
  return (
    <section className='profile'>
      <img className='photo' src={image} alt='avatar' />
      {isNew && <span className='tag'>new</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </section>
  );
}
