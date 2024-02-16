export function SiteFooter() {
  return (
    <footer className="container flex justify-center">
      <div className="py-7">
        <p className="text-sm leading-7 text-muted-foreground">
          {new Date().getFullYear()} Honeyberry
        </p>
      </div>
    </footer>
  );
}
