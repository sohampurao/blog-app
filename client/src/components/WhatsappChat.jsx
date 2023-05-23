import { Link } from 'react-router-dom';
export default function WhatsappChat() {
  return (
    <>
      <Link
        to={
          'https://api.whatsapp.com/send/?phone=919518556937&text&type=phone_number&app_absent=0'
        }
        target="_blank"
        className="cursor-pointer w-[60px] h-auto fixed bottom-4 right-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
          alt="Whats App Icon"
          className="w-full object-contain"
        />
      </Link>
    </>
  );
}
