import profileImg from '../assets/profile.png'

const user = {
    name: 'Austin Orphan',
    imageSize: 200,
};

export default function Header() {
    return (
        <>
            <header>
                <h1>{user.name}</h1>
                <h2>Lead Web Developer</h2>
                <img
                    className="avatar"
                    src={profileImg}
                    alt={'Photo of ' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
            </header>
        </>
    );
}
