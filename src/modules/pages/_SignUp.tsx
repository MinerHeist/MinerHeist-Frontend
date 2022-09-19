import axios from 'axios'
import { FormEvent, useState } from 'react'
import { ArticleContainer } from '../components'

const SignUp = (): JSX.Element => {
  const [team, setTeam] = useState('')
  const [uname, setUname] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passVerify, setPassVerify] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (pass !== passVerify) {
      alert('You did a fucky wucky\n(Your passwords do not match)')
      return
    }

    const headers = {
      'Access-Control-Allow-Origin': '*',
    }

    const res = await axios.post('http://localhost:8000/api/team/', {
      name: team,
      hash: pass,
    },
    {headers})
    const res2= await axios.post('http://localhost:8000/api/mem/', {
      uname: uname,
      is_owner: true,
      hash: pass,
      team: team,
    },
    {headers})

    console.log(res.data)
  }

  return (
    <ArticleContainer title="Sign Up">
      <form
        className="sign-up-form"
        onSubmit={(e) => handleSubmit(e)}
        target=""
      >
        <label>
          Team Name
          <input
            type="text"
            name="teamName"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </label>
        <label>
          Verify Password
          <input
            type="password"
            name="passwordVerify"
            value={passVerify}
            onChange={(e) => setPassVerify(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </ArticleContainer>
  )
}

export default SignUp
