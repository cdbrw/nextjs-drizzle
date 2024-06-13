export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto text-stone-400 text-center py-5 px-7 border-t">
      <small>&copy; {year}. All rights reserved.</small>
    </footer>
  );
}
