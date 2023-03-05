
const Footer = () => {
  return (
    <footer>
      <p
        className='mx-auto p-10 bg-slate-900 text-sky-600 text-center text-sm rounded-b-lg border-t-sky-700 border-t'
      >&copy; {new Date().getFullYear()} Proxima by <span className="hover:text-sky-200 duration-300">Tahmina Akter Tanni</span>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;