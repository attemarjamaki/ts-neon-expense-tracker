const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm">
          <p>&copy; {currentYear} Expense Tracker. All rights reserved.</p>
          <p className="mt-2 italic">
            Remember: A penny saved is a penny you can spend later!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
