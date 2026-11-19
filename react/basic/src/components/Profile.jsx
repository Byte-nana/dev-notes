export default function Profile({ image, name, title }) {
  return (
    <section className='profile'>
      <img className='photo' src={image} alt='avatar' />
      <h2>{name}</h2>
      <p>{title}</p>
    </section>
  );
}
