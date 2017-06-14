import { PureComponent } from 'react'
import Head from 'next/head'
import stylesheet from '../styles/index.css'

export default class Layout extends PureComponent {
  render () {
    const { className, children } = this.props
    return <div className={className}>
      <Head>
        <meta charset='utf-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <link rel='shortcut icon' href='/static/images/favicon.ico' />
      </Head>
      <div>
        {children}
      </div>
    </div>
  }
}
