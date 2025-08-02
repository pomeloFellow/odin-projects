import './App.css'
import Section from './components/Section'

function App() {
  const generalLabel: string = 'General'
  const educationLabel: string = 'Educaction'
  const experienceLabel: string = 'Experience'

  const generalFields = {
    name : 'name',
    phone : 'phone number',
    email : 'email'
  }

  const educationFields = {
    school : 'school',
    degree : 'degree',
    gradyr : 'graduation year'
  }

  const experienceFields = {
    company : 'company',
    role : 'job title',
    from : 'start date',
    until : 'end date'
  }


  return (
    <div>
      <Section sectionName={generalLabel} fields={generalFields}/>
      <Section sectionName={educationLabel} fields={educationFields}/>
      <Section sectionName={experienceLabel} fields={experienceFields}/>
    </div>
  )
}

export default App
