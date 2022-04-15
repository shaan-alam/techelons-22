export interface Teacher {
  name: string,
  message: string,
  profileImage: string,
  designation: string
}

export interface Props {
  teachers: Array<Teacher>
}