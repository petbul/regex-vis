import { clip } from 'versioncam'

// Types a regular expression, lets Regex Vis draw it, then selects one node
// in the diagram and changes its value from the Edit panel.
export default clip('type-and-edit-a-node', { title: 'Type a regex, edit a node', seed: 4 }, async (s) => {
  await s.open('/')
  s.caption('Type a regular expression, and Regex Vis draws it')
  await s.hold(1600)

  await s.typeInto(s.byTestId('regex-input'), '(cat|dog)s?')
  // The input slides to the bottom and the diagram fades in on the app's own
  // animation, which a settle does not wait for; the hold covers it.
  await s.hold(900)
  await s.settle({ label: 'diagram' })
  await s.hold(2400)

  s.caption('Click a node to edit it')
  await s.click(s.byText('dog'))
  // The side panel crossfades from Legends to Edit.
  await s.hold(700)
  await s.settle({ label: 'node selected' })
  await s.hold(2000)

  const value = s.css('[role="tabpanel"] input[type="text"]')
  await s.click(value)
  await s.press('ControlOrMeta+a')
  await s.type('fox')
  await s.hold(500)
  await s.settle({ label: 'node edited' })
  await s.moveTo([1060, 330])
  await s.hold(3000)
})
