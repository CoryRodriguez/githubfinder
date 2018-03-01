class Github {
  constructor(){
    this.client_id = 'c7136f0c31698efd8a95';
    this.client_secret = '735b22f8d9d6705ee1268f641e481d4307f5099c';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}