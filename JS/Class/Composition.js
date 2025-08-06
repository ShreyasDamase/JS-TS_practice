// What Does It Mean?
// Instead of building big class hierarchies with extends, we build objects by combining small reusable behaviors (functions or modules).

const canfly = (state) => ({
  flay: () => console.log(`${state.name} is flying`),
});
const canSwim = (state) => ({
  swim: () => console.log(`${state.name} he can swim`),
});

const createHero = (name) => {
  const state = { name };

  return {
    ...canfly(state),
    ...canSwim(state),
  };
};

const Sperman = createHero("shreyas");
Sperman.flay();
Sperman.swim();
