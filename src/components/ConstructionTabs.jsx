import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DeliverableCard from './DeliverableCard.jsx'
import TimelineSection from './TimelineSection.jsx'
import SupervisionStepper from './SupervisionStepper.jsx'
import FeeTable from './FeeTable.jsx'
import { CheckCircle } from 'lucide-react'

export default function ConstructionTabs() {
  const [active, setActive] = useState('Deliverables')
  const tabs = ['Deliverables', 'Interior Details', 'Construction Stages', 'Top Supervision', 'Fee & Payments']

  const deliverables = [
    { title: 'Architectural Design' },
    { title: 'Structural Design' },
    { title: 'MEPs' },
    { title: 'Elevation Design' },
    { title: 'Interior Design' },
    { title: 'Soil Test' },
    { title: 'Landscaping' },
    { title: 'Site Survey' },
  ]

  const interior = [
    'Flooring',
    'Ceiling',
    'Wood Work',
    'Metal Work',
    'Glass Work',
    'Kitchen',
    'Bathroom Layout',
  ]

  const constructionStages = [
    'Master Plan',
    'Wall Layout Plans',
    'Elevation Details',
    'Section Details',
  ]

  const supervisionSteps = [
    'Foundation Layout',
    'Basement & Floor Lintels',
    'Slab Shuttering',
    'Ground & First Floor Layouts',
    'Finishing Selections',
  ]

  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold border ${active === t ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/20'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {active === 'Deliverables' && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-center">
                {deliverables.map((d, i) => (
                  <DeliverableCard key={i} title={d.title} Icon={CheckCircle} />
                ))}
              </div>
            )}
            {active === 'Interior Details' && (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {interior.map((d, i) => (
                  <DeliverableCard key={i} title={d} Icon={CheckCircle} />
                ))}
              </div>
            )}
            {active === 'Construction Stages' && (
              <TimelineSection title="Construction Stages" steps={constructionStages} />
            )}
            {active === 'Top Supervision' && (
              <SupervisionStepper title="Top Supervision" steps={supervisionSteps} />
            )}
            {active === 'Fee & Payments' && (
              <FeeTable />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}