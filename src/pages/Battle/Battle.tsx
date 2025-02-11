import SelectHero from './SelectHero';

const Battle = () => {
  return (
    <section className='w-6xl mx-auto max-w-full'>
      <h1>Battle</h1>
      <SelectHero label='first' />
      <SelectHero label='second' />
    </section>
  );
};

export default Battle;
