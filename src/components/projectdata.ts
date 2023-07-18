interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
    {
      title: 'Competitive Programming',
      subtitle: 'C++, Python, and Java',
      description:
        'As mentioned previously, competitive programming is without a doubt one of my favourite hobbies. Here is my repository with my solutions to various problems online.',
      image: 'language-logos.png',
      link: 'https://github.com/antpoo/andrew-cp-solutions',
    },
    {
      title: 'This Website',
      subtitle: 'React and Typescript',
      description:
        'Of course, this very website is also a project of mine! It showcases my learnings of using various node modules with the React library and Typescript to build a clean and functional website.',
      image: './tsreact.webp',
      link: 'https://github.com/antpoo/antpoo.github.io',
    },
    {
      title: 'Super Mario Shooter',
      subtitle: 'JavaFX',
      description:
        'I used JavaFX to develop a GUI app and made a fun game based on Nintendo\'s Super Mario Bros. games. All credit for images goes to Nintendo!',
      image: './JavaFxLogo.png',
      link: '',
    },
    {
      title: 'Minecraft Plugins',
      subtitle: 'Java',
      description:
        'Using the SpigotMC (fork of Bukkit) libraries, I developed custom plugins for use in my own Minecraft servers to enhance the quality of life during gameplay as well as made some gameplay modifications.',
      image: './bukkit.jpg',
      link: '',
    },
  ];