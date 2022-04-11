export interface Teacher {
  name: string,
  message: string,
  profileImage: string
}

export interface Props {
  teachers: Array<Teacher>
}