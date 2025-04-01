import profileImg from './assets/profile.png'

const user = {
    name: 'Austin Orphan',
    imageSize: 100,
};

export default function Profile() {
    return (
        <>
            <header>
                <h1>{user.name}</h1>
                <p>Lead Web Developer</p>
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
