import Card from '../Card';
import CompanieSlider from './CompanieSlider';

export default function CompaniesSection({ jobs }) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Companies Available
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Trusted by companies. Loved by candidates.
        </p>

        {jobs.length > 0 ? (
          <ul className="flex flex-wrap gap-6 justify-center">
            {jobs.map((job) => (
              <li key={job.id} className="list-none">
                <Card data={job} type="job" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="w-5/6 mx-auto">
            <CompanieSlider />
          </div>
        )}
      </div>
    </section>
  );
}
