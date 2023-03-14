function TopBanner() {
  return (
    <section>
      <img className="brightness-50 w-auto" src="/src/assets/home_bg.jpg" />
    </section>
  );
}

export default function HomePage() {
  return (
    <div>
      <TopBanner />
    </div>
  );
}
