/**
 * @file [getPx2vw]
 * @author [mzvast]
 * @email [mzvast@gmail.com]
 * @create date 2019-06-27 16:17
 */
/* eslint-disable max-len,babel/new-cap,operator-linebreak,fecs-export-on-declare,space-before-function-paren */

/**
 * getPx2vw
 * @param pWidth 设计稿宽度，单位px
 */
export default function getPx2vw(pWidth: number) {
// -2 /* post-process context */
// -1 /* preparation context */
// 0  /* newline context */
//
// 1  /* property context */
// 2  /* selector block context */
// 3  /* @at-rule block context */
    /**
     * px2vw
     * @param context
     * @param content
     * @param selectors
     * @param parent
     * @param line
     * @param column
     * @param length
     */
    return function px2vw(context, content, selectors, parent, line, column, length) {
        // console.log('plugin::context:,', context, ',content:', content);
        switch (context) {
            case 1:
                console.log('plugin::1content', content);
                return content.replace(/([0-9.]+)px/g, function (match, p1) {
                    console.log('plugin::match,p1', match, p1);
                    const val = Number(p1);

                    if (val > 1) {
                        return val * 100 / pWidth + 'vw';
                    }

                    if (val === 0) {
                        return '0';
                    }
                    // 0<val<=1
                    if (devicePixelRatio > 1) {
                        return '0.5px';
                    }
                    return '1px';
                });
        }
    };
}


