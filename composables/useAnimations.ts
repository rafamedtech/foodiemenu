export function useAnimations() {
  const { $gsap } = useNuxtApp();

  function myAnimations() {
    $gsap.from('.title-heading', { opacity: 0, x: -50, duration: 0.3 });
    $gsap.from('.content', { opacity: 0, y: 50, duration: 0.3 }).delay(0.2);
  }

  return { myAnimations };
}
