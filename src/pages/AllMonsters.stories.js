import React from 'react'
import AllMonsters from './AllMonsters'
import { useTitle } from '../Hooks/useTitle'

export default {
  title: 'Pages/AllMonsters',
  component: AllMonsters,
}

const Template = (args) => <AllMonsters {...args} />

export const MonsterList = Template.bind({})
MonsterList.args = {
  loading: false,
  useTitle: useTitle,
  monsterDetails: [
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'neutral evil',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'any non-good alignment',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'lawful good',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'chaotic evil',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'neutral',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'chaotic good',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
    {
      index: 'name',
      name: 'Name',
      size: 'Size',
      type: 'type',
      alignment: 'lawful good',
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
      proficiencies: [{}],
      challenge_rating: 11,
    },
  ],
}
