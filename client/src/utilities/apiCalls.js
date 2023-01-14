import axios from 'axios'
import { HTTP, API_URL } from '@/config.js'
import Queries from '@/utilities/apiQueries.json'
import { useAuth } from '@/stores/auth'

const auth = useAuth()
export const apiCalls = {
  config() {
    const conf = {
      headers: { Authorization: `Bearer ${auth.getToken}` }
    }
    return conf
  },

  configUpload() {
    const conf = {
      headers: {
        Authorization: `Bearer ${auth.getToken}`,
        'Content-Type': 'multipart/form-data'
      }
    }
    return conf
  },

  // Auth SignIn User
  signinUser(i, p) {
    return HTTP.post(`${API_URL}${Queries.auth.signin}`, {
      identifier: i,
      password: p
    })
  },

  registerUser(u, e, p) {
    // Auth Register User
    return axios.post(`${import.meta.env.VITE_API_URL}/auth/local/register`, {
      username: u,
      email: e,
      password: p
    })
  },

  changeUserPassword(c, n, cp) {
    let config = this.config()

    // Auth Register User
    return axios.post(
      `${API_URL}${Queries.auth.changePassword}`,
      {
        currentPassword: c,
        password: n,
        passwordConfirmation: cp
      },
      config
    )
  },

  deleteUser(id) {
    let config = this.config()

    // Auth Register User
    return axios.delete(`${API_URL}${Queries.users.deleteUser}${id}`, config)
  },

  getUserMe() {
    let config = this.config()
    // Get User Me
    return HTTP.get(`${API_URL}${Queries.users.userSignedIn}`, config)
  },
  // Get User Profile ID
  getProfileID(isUser) {
    let config = this.config()
    return axios.get(
      `${import.meta.env.VITE_API_URL}/users/${isUser}?populate=*`,
      config
    )
  },
  // Get Resume Profile
  getUserProfile(theID) {
    let config = this.config()
    return axios.get(`${API_URL}/resumes/${theID}?populate=*`, config)
  },
  // Get Recruiter Profile
  getProfileRecruiter(theID) {
    let config = this.config()
    return axios.get(`${API_URL}/recruiters/${theID}?populate=*`, config)
  },
  // Get All Profiles
  getProfiles() {
    return axios.get(`${import.meta.env.VITE_API_URL}/resumes?populate=*`)
  },
  // Get Filtered Profiles
  getFilteredProfiles(filters) {
    return axios.get(
      `${import.meta.env.VITE_API_URL}/resumes?${filters}&populate=*`
    )
  },
  // Create User Resume
  createUserResume(theBody) {
    let config = this.config()
    const dude = axios.post(
      `${import.meta.env.VITE_API_URL}/resumes/`,
      theBody,
      config
    )
    return dude
  },
  // Update User Profile
  updateProfile(reqData, profileId) {
    let config = this.config()
    return axios.put(
      `${import.meta.env.VITE_API_URL}${
        Queries.resume.updateResume
      }${profileId}`,
      reqData,
      config
    )
  },

  // EDUCATION
  addEducation(reqData) {
    let config = this.config()
    return axios.post(
      `${import.meta.env.VITE_API_URL}${Queries.education.post}`,
      reqData,
      config
    )
  },
  getEducationByID(eduID) {
    let config = this.config()
    return axios.get(
      `${import.meta.env.VITE_API_URL}${Queries.education.getOne}${eduID}`,
      config
    )
  },
  updateEducation(reqData, eduID) {
    let config = this.config()
    return axios.put(
      `${import.meta.env.VITE_API_URL}${Queries.education.put}${eduID}`,
      reqData,
      config
    )
  },
  deleteEducation(eduID) {
    let config = this.config()
    return axios.delete(
      `${import.meta.env.VITE_API_URL}${Queries.education.delete}${eduID}`,
      config
    )
  },

  // EXPERIENCE
  addExperience(reqData) {
    let config = this.config()
    return axios.post(
      `${import.meta.env.VITE_API_URL}${Queries.experience.post}`,
      reqData,
      config
    )
  },
  getExperience(eduID) {
    let config = this.config()
    return axios.get(
      `${import.meta.env.VITE_API_URL}${Queries.experience.getOne}${eduID}`,
      config
    )
  },
  updateExperience(reqData, eduID) {
    let config = this.config()
    return axios.put(
      `${import.meta.env.VITE_API_URL}${Queries.experience.put}${eduID}`,
      reqData,
      config
    )
  },
  deleteExperience(eduID) {
    let config = this.config()
    return axios.delete(
      `${import.meta.env.VITE_API_URL}${Queries.experience.delete}${eduID}`,
      config
    )
  },

  // CERTIFICATIOn
  addCertification(reqData) {
    let config = this.config()
    return axios.post(
      `${import.meta.env.VITE_API_URL}${Queries.certifications.post}`,
      reqData,
      config
    )
  },
  getCertificationByID(certID) {
    let config = this.config()
    return axios.get(
      `${import.meta.env.VITE_API_URL}${
        Queries.certifications.getOne
      }${certID}`,
      config
    )
  },
  updateCertification(reqData, certID) {
    let config = this.config()
    return axios.put(
      `${import.meta.env.VITE_API_URL}${Queries.certifications.put}${certID}`,
      reqData,
      config
    )
  },
  deleteCertification(certID) {
    let config = this.config()
    return axios.delete(
      `${import.meta.env.VITE_API_URL}${
        Queries.certifications.delete
      }${certID}`,
      config
    )
  },

  // SKILLS
  addSkill(reqData) {
    let config = this.config()
    return axios.post(
      `${import.meta.env.VITE_API_URL}${Queries.skills.post}`,
      reqData,
      config
    )
  },
  getSkillByID(eduID) {
    let config = this.config()
    return axios.get(
      `${import.meta.env.VITE_API_URL}${Queries.skills.getOne}${eduID}`,
      config
    )
  },
  updateSkill(reqData, eduID) {
    let config = this.config()
    return axios.put(
      `${import.meta.env.VITE_API_URL}${Queries.skills.put}${eduID}`,
      reqData,
      config
    )
  },
  deleteSkill(eduID) {
    let config = this.config()
    return axios.delete(
      `${import.meta.env.VITE_API_URL}${Queries.skills.delete}${eduID}`,
      config
    )
  },

  // LANGUAGES
  addLanguage(reqData) {
    let config = this.config()
    return axios.post(
      `${import.meta.env.VITE_API_URL}${Queries.languages.post}`,
      reqData,
      config
    )
  },
  getLanguageByID(eduID) {
    let config = this.config()
    return axios.get(
      `${import.meta.env.VITE_API_URL}${Queries.languages.getOne}${eduID}`,
      config
    )
  },
  updateLanguage(reqData, eduID) {
    let config = this.config()
    return axios.put(
      `${import.meta.env.VITE_API_URL}${Queries.languages.put}${eduID}`,
      reqData,
      config
    )
  },
  deleteLanguage(eduID) {
    let config = this.config()
    return axios.delete(
      `${import.meta.env.VITE_API_URL}${Queries.languages.delete}${eduID}`,
      config
    )
  },

  // Save to Candidates List
  saveCandidateList(reqData, authHeader) {
    return axios.post(
      `${reqData.meta.env.VITE_API_URL}'/recruiter-resumes-collections'`,
      reqData,
      authHeader
    )
  },
  // TODO: Upload User Photo
  uploadPhoto(data) {
    let configUpload = this.configUpload()
    return axios.post(
      `${API_URL}${Queries.upload.postFile}`,
      data,
      configUpload
    )
  },
  // Delete Profile Photo
  deleteProfilePhoto(theID) {
    let config = this.config()
    return axios.delete(
      `${API_URL}${Queries.upload.deleteFile}${theID}`,
      config
    )
  }
}
