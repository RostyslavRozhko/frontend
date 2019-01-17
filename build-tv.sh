#/bin/sh
export APPID=$(date +%Y%m%d%s)
export DAY=$(date +%Y%m%d)
rm -rf build/apps
mkdir build/apps

echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<rsp stat=\"ok\">
    <list>
        <widget id=\"mediacast$APPID\">
            <title>Mediacast TV</title>
            <compression size=\"100000\" type=\"zip\"/>
            <description>Mediacast TV</description>
            <download>http://199.247.26.101/apps/MEDIACAST_0.1_America.zip</download>
        </widget>
    </list>
</rsp>
" > build/widgetlist.xml