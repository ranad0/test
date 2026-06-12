import { filterOptions } from '../../data/fleet';
import { trackEvent } from '../../utils/tracking';

type Filters = Record<string, string>;

type FleetFiltersProps = {
  filters: Filters;
  onChange: (filters: Filters) => void;
};

const labels: Record<string, string> = {
  service: 'نوع الخدمة',
  category: 'الفئة',
  brand: 'العلامة',
  passengers: 'الركاب',
  luggage: 'الأمتعة',
  duration: 'المدة',
  occasion: 'المناسبة',
  year: 'الموديل',
  delivery: 'التوصيل'
};

const optionsMap: Array<{ key: string; options: string[] }> = [
  { key: 'service', options: filterOptions.serviceTypes },
  { key: 'category', options: filterOptions.categories },
  { key: 'brand', options: filterOptions.brands },
  { key: 'passengers', options: filterOptions.passengers },
  { key: 'luggage', options: filterOptions.luggage },
  { key: 'duration', options: filterOptions.durations },
  { key: 'occasion', options: filterOptions.occasions },
  { key: 'year', options: filterOptions.modelYears },
  { key: 'delivery', options: filterOptions.delivery }
];

export function FleetFilters({ filters, onChange }: FleetFiltersProps) {
  const update = (key: string, value: string) => {
    const next = { ...filters, [key]: value };
    onChange(next);
    trackEvent('fleet_filter_used', { filter_key: key, filter_value: value });
  };

  const reset = () => onChange({});

  return (
    <div className="rounded-[1.7rem] border border-champagne/15 bg-charcoal/70 p-4 shadow-gold md:p-5">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h2 className="font-arabic text-xl font-semibold text-ivory">تصفية الأسطول</h2>
        <button type="button" onClick={reset} className="text-sm text-champagne hover:text-ivory">إعادة ضبط</button>
      </div>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-3 lg:overflow-visible xl:grid-cols-9">
        {optionsMap.map(({ key, options }) => (
          <label key={key} className="min-w-44 flex-1 lg:min-w-0">
            <span className="mb-2 block text-xs text-silver/70">{labels[key]}</span>
            <select
              value={filters[key] || ''}
              onChange={(event) => update(key, event.target.value)}
              className="min-h-11 w-full rounded-full border border-champagne/18 bg-obsidian/80 px-4 text-sm text-ivory outline-none transition focus:border-champagne"
            >
              <option value="">الكل</option>
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </div>
  );
}
