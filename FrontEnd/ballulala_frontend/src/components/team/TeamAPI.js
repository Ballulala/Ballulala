import axios from 'axios';

const teamURL = 'http://localhost:8080'; // 스프링 서버 URL을 입력하십시오.

export const fetchTeams = async () => {
  try {
    const response = await axios.get(`${teamURL}/api/teams`);
    return response.data;
  } catch (error) {
    console.error('Error in fetchTeams:', error);
  }
};

export const fetchTeamDetails = async (teamId) => {
  try {
    const response = await axios.get(`${teamURL}/api/teams/${teamId}`);
    return response.data;
  } catch (error) {
    console.error('Error in fetchTeamDetails:', error);
  }
};
