
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.cdnfonts.com/css/calibre" rel="stylesheet" />
                    <link href="https://fonts.cdnfonts.com/css/sf-mono" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument