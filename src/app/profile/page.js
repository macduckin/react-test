import Header from '../../components/header/header'
import Image from 'next/image'
import ModalWindow from '../../components/modalWindow/page'
import avatar from '../../../public/images/avatar.jpg'
import Posts from '../../components/posts/index'
export default function Profile() {
    const posts = [{
        url: 'https://yandex-images.clstorage.net/OKVT55147/81a3ec2i/ScX3GMM8Tw864JfuSxAoY6cwJOuNgfW2q06SGiZcqv85mbAFrbRAWUyLr6tFpD7j0Hg8s2K1eGj090BQndesU6zx4pzn_f7rykCH7nvAudM3QJRrfQG09ttrF2wAi7jICg5DMmrzhzgIn54fUOFes-Ss6XKBI-lbw2EC4VnAiNTKtdRrki1MyelRpln5AsuRxhMzebzA8WRfLuNcUtuK6Eq9wsBLsdcpOm5ofFOynNI1-6lRsbKeCYOCEFGLEYgEi8WWqhH_3rloAgZq68OoQKZyAWs9oSGXDExC_WNpKHpbfHMBmPJn-8lfSF4T0LyRRqjJIzBAnkhhAUEw69NIRejGhGvTTwwoSNI068qyGOLU4cKbDaPBlIwOgX5wKxm5eq3BsLmQtVnKjNtuAHGu05WYalPAMN47IyPRYJtB6tbK9mVYwKxOualxlIvI4OkSRTKwin_zwMSMfvPNg0roqVmsIACZEoWaeuyIrYIArMDkaOngccLMWQGD0NOpYapWWJaHuiOe73pa8uY6y8D4oRYhIrveQ-B2nE6ibcJoqUhYrTCSGGGG6QpOyG_j4T3jV6pbUFLyrGoT8DDCmxIYdniHNpuwjE76iSOUmvgjG6H0I4BJnlIRhL5-cXyhuPvZGb6CwYkQh3mrHrisUCD8YcY6yfAA8S_ZwcIzEqoTitU5t4YKkV_cyQkipnuawzgBJHAjq5_gESctjsKMozvrmNkPgDK6Ildo6Pw53AIxr4KlC1tgcmONKCEgobCYMKpUebcXu5IvrumIo9Z6KNDrsXeQ0Sk9wlIXXj-S3xPKKMm4rEJBi-IEiUuv-myiIO9ghXmJ0DCRb7vjo8DyOnOJFSm0NEiyXkwKmXJku8rgurMnwWBo7fIjlV6eEC6xC_h5qH0TcAgyd5sZj9h_U-Ot8zYZG_GTs1w4w-PgY8qCijbq59Sbw-7tOWuRRIs40TjT13IDK96xkZdN3tDvc9lKQ',
        description: 'lorem ipsum',

    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=5712c6f882a30c11547b76d31122554e12b845f8-10355051-images-thumbs&n=13',
        description: 'lorem ipsum',

    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=abe55da167c428ffa9bb1e22680dacaaa31c80a9-9068298-images-thumbs&n=13',
        description: 'lorem ipsum',

    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=6d6046b038dba6949a291242f4fae9539d81681e-8071678-images-thumbs&n=13',
        description: 'lorem ipsum',

    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=4f680c2caae98e5aa403de69e3f8c08c67753e2d-9288635-images-thumbs&n=13',
        description: 'lorem ipsum',

    },
    {
        url: 'https://avatars.mds.yandex.net/i?id=b86e7e1b3bf618d24d4792d31dd884743421168b-8339189-images-thumbs&n=13',
        description: 'lorem ipsum',

    }]
    return (
        <main>
            <Header />
            <div className='profile container'>
                <div className='profile-inner'>
                    <div className='flex'>
                        <div className='avatar'>
                            <Image src={avatar} style={{ borderRadius: '100%', width: '150px', height: '150px' }} />
                        </div>
                        <div className='profile-info'>
                            <div className='info nick-btn'>
                                <h1>terrylucas</h1>
                                <button className='follow'>Follow</button>
                                <p>...</p>
                            </div>
                            <div className='info num'>
                                <p>1,258 posts</p>
                                <p>4M followers</p>
                                <p>1,250 following</p>
                            </div>
                            <p className='full_name'>Terry Lucas</p>
                        </div>
                    </div>
                </div>
            </div>
            <Posts posts={posts} />
            <ModalWindow />
        </main>
    )
}