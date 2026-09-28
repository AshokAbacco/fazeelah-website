import { officeHours } from '../data/schoolData.js';

/** Accessible office-hours table; highlights today's row. */
export default function OfficeHours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  return (
    <div className="overflow-hidden rounded-3xl border border-forest/[0.08] bg-white shadow-card">
      <table className="w-full text-left text-sm sm:text-[0.95rem]">
        <caption className="sr-only">School office hours</caption>
        <thead className="bg-sage">
          <tr>
            <th scope="col" className="px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-forest sm:px-7">
              Day
            </th>
            <th scope="col" className="px-5 py-4 text-right text-xs font-bold uppercase tracking-[0.2em] text-forest sm:px-7">
              Hours
            </th>
          </tr>
        </thead>
        <tbody>
          {officeHours.table.map((row) => {
            const isToday = row.day === today;
            return (
              <tr key={row.day} className={`border-t border-forest/[0.06] ${isToday ? 'bg-clay-light/40' : 'hover:bg-ivory'}`} aria-current={isToday ? 'date' : undefined}>
                <th scope="row" className="px-5 py-4 font-semibold text-ink sm:px-7">
                  <span className="flex items-center gap-2">
                    {row.day}
                    {isToday && <span className="rounded-full bg-clay px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Today</span>}
                  </span>
                </th>
                <td className={`px-5 py-4 text-right sm:px-7 ${row.open ? 'text-ink-soft' : 'font-semibold text-clay-dark'}`}>{row.hours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
