export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center">
      <div className="container mx-auto">
        <p className="mb-2">
          123 Fifth Avenue, NY 10160, New York, USA | Phone: 800-123-456 | Email: contact@example.com
        </p>
        <p className="text-gray-500">
          Copyright &copy; {new Date().getFullYear()} Outdoor Adventure
        </p>
      </div>
    </footer>
  );
}
