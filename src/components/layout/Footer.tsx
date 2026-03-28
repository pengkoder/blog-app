export default function Footer() {
  return (
    <footer className="border-t mt-20 py-8 text-center text-sm text-muted-foreground">
      © {new Date().getFullYear()} Notes
    </footer>
  );
}
