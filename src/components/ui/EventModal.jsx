import { X } from "lucide-react";

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8 md:p-12 border-4 border-brand-navy relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-navy/50 hover:text-brand-navy transition-colors"
        >
          <X size={32} />
        </button>

        <div className="inline-block bg-brand-light-blue text-brand-navy px-4 py-2 font-bold border-2 border-brand-navy rounded-full text-sm mb-6">
          {event.category}
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-brand-navy mb-4 leading-tight">
          {event.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 font-bold font-inter text-brand-navy/80 mb-8 bg-brand-off-white p-4 rounded-xl border-2 border-brand-navy/10">
          <div className="flex items-center gap-2">
            <span className="text-sm">Date:</span>
            <span className="text-sm font-medium">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Time:</span>
            <span className="text-sm font-medium">{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Mode:</span>
            <span className="text-sm font-medium">{event.mode}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-brand-navy/80">
          <h3 className="font-bold text-xl text-brand-navy">Speaker</h3>
          <p>{event.speaker}</p>
          
          <h3 className="font-bold text-xl text-brand-navy mt-6">Event Summary</h3>
          <p>{event.summary}</p>

          <h3 className="font-bold text-xl text-brand-navy mt-6">Highlights</h3>
          <ul className="list-disc pl-5">
            {event.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
