import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('visitor-counter')

def lambda_handler(event, context):

    is_unique = event.get('queryStringParameters', {})
    unique = is_unique.get('unique', 'false')

    # Views Counter
    response = table.get_item(
        Key={'id': 'visitors'}
    )

    views = int(response['Item']['count'])
    views += 1

    table.put_item(
        Item={
            'id': 'visitors',
            'count': views
        }
    )

    # Unique Visitors Counter
    response = table.get_item(
        Key={'id': 'uniqueVisitors'}
    )

    unique_visitors = int(response['Item']['count'])

    if unique == 'true':
        unique_visitors += 1

        table.put_item(
            Item={
                'id': 'uniqueVisitors',
                'count': unique_visitors
            }
        )

    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'views': views,
            'visitors': unique_visitors
        })
    }