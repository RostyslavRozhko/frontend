#/bin/sh
export APPID=$(date +%Y%m%d%s)
export DAY=$(date +%Y%m%d)
rm -rf apps/*
echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>
<rsp stat=\"ok\">
    <list>
        <widget id=\"mediacast$APPID\">
            <title>Mediacast TV</title>
            <compression size=\"100000\" type=\"zip\"/>
            <description>Mediacast TV</description>
            <download>http://192.168.1.101/apps/MEDIACAST_0.1_America_$DAY.zip</download>
        </widget>
    </list>
</rsp>
" > widgetlist.xml

zip -r apps/MEDIACAST_0.1_America_$DAY.zip * .* -x \*widgetlist.xml -x \*build* -x \*.dockerignore -x \*.idea -x \*Dockerfile -x \*.gitignore -x \*readme.md -x \*dune -x \*apps -x \*dockerBuild.sh -x ../\* -x \*.git/\*