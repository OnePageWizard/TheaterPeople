import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'

import RepertoireCard from '../components/RepertoireCard/RepertoireCard'

import "./Repertoire.scss"

const a = [{title: "dmkfk;gjkldjfgkl", img:"#"},
{title: "dmkfk;gjkldjf gk5345 wqd l", img:"#"},
{title: "dmkfk;g jkldjfgkl", img:"#"},
{title: "dmkfk;gjklf sdf s djf gkl", img:"#"},
{title: "dmk fk;gjkldjfgkl", img:"#"},
{title: "dmkf k;gjkldj fgkl", img:"#"},
{title: "d kfk;gjkld jfgkl", img:"#"},
] 

const Repertoire = () => {
  const [Repertoires, setRepertoires] = useState(a)

  return (
    <Layout HeadActive={true}>
      <div className='reportoire__wrapper'>
        {Repertoires.map((obj) => <RepertoireCard img={obj.img} title={obj.title}/>)}
      </div>
    </Layout>
  )
}

export default Repertoire