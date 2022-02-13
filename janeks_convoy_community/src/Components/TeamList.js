const people = [
    {
        id: 0,
        username: 'Janek',
        role: 0,
        avatar: 'https://images-ext-1.discordapp.net/external/KGNcVNMHQUTzcuIZCK_coa3YdqEt3A_UQgKn-eCw4IU/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/468104829378756608/a_dfa19ba42792f588722943d1631a99ed.gif',
    },
    {
        id: 3,
        username: 'CuteCube',
        role: 1,
        avatar: 'https://images-ext-1.discordapp.net/external/8KLbr9PHRoDud52b5ez9zvyT9hcZ1p32ubbRQGp9r70/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/295528461018202122/7fe94fcfe87bab8a792c53a19c4f89f4.png',
    },
    {
        id: 2,
        username: 'Caramba2412',
        role: 2,
        avatar: 'https://images-ext-1.discordapp.net/external/nF2YkZnk0oVX6M6qIIvNhmraCNQQO1bG7YehmKtPTPI/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/601448298737434682/145b0f2aeddda837b69e323048a40b4c.png',
    },
    {
        id: 1,
        username: 'Lightning',
        role: 3,
        avatar: 'https://images-ext-2.discordapp.net/external/3VXIUp_qgFcrWh7LQZMp9PEE_LcUx7zfY1DSs4vAICk/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/343427334323568643/e374a39444f606e8d9de0f494224104c.png',
    },
    {
        id: 5,
        username: 'duk.',
        role: 4,
        avatar: 'https://cdn.discordapp.com/avatars/887844358710247486/b0a1b8772cd0a076ec7e2acbdcb8cb86.png',
    },
    {
        id: 6,
        username: 'KW',
        role: 5,
        avatar: 'https://images-ext-1.discordapp.net/external/rFGSz0meDrWteDlB26Il7lG_H1BCzO7eOVhl4jXf3mg/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/495337659820933123/42eaa2ddcf5199522607268fb2c1c5cf.png',
    },
    {
        id: 7,
        username: 'Shift2k',
        role: 6,
        avatar: 'https://images-ext-2.discordapp.net/external/f9298Zs7DzhbKSvM8amMQMq0CqaEtLDp6MUdQqCn6pw/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/238084740769382400/ab2ca84061d02e215afd0947a9c71c1e.png',
    },
    {
        id: 4,
        username: 'CEBO',
        role: 7,
        avatar: 'https://cdn.discordapp.com/avatars/604358498461024277/a_8d79b7188fab97fb367f792888932dbf.gif',
    },
];

function getPosition(i) {
    switch (i) {
        case 0:
            return "Event Founder";
        case 1:
            return "Senior Event Organiser";
        case 2:
            return "Event Organiser";
        case 3:
            return "Event Manager";
        case 4:
            return "Development Manager";  
        case 5:
            return "Discord Moderation Manager";  
        case 6:
            return "Convoy Control Manager";  
        case 7:
            return "Media Manager";            
        default:
            break;
    }
}

const TeamList = () => {
    return (
        <>
        {people.map((item) => (
        <div key={item.id}>
            <img src={item.avatar} />
            <span>{item.username}</span>
            <span>{getPosition(item.role)}</span>
        </div>
      ))}
        </>
    );
  };

export default TeamList;
