import os.path
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from google.auth.transport.requests import Request


SCOPES = ['https://mail.google.com/']
ACCOUNT = "provengo6"
TOKEN_FILE = TOKEN_FILE = 'token-' + ACCOUNT + '.json'
CLIENT_SECRET_FILE = os.path.join(os.getcwd(), ACCOUNT + '-credentials.json')

print(f"Client Secret file name:" + CLIENT_SECRET_FILE)
print(f"Access Token file name:" + TOKEN_FILE)


def authenticate():
    credentials = None

    # Check if token file exists
    if os.path.exists(TOKEN_FILE):
        credentials = Credentials.from_authorized_user_file(TOKEN_FILE)

    # If credentials don't exist, run the authentication flow
    if not credentials :
        flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES)
        credentials = flow.run_local_server(port=0)

        # Save credentials, including refresh token, to file
        with open(TOKEN_FILE, 'w') as token:
            token.write(credentials.to_json())

    # Attempt to refresh the access token to check the validity of the refresh token
    try:
        credentials.refresh(Request())
    except Exception as e:
        print(f"Error refreshing access token: {e}")
        # Handle the case where the refresh token is invalid or expired

    # Print token expiration details
    print(f'Access token expiration: {credentials.expiry}')
    print(f'Refresh token valid: {not credentials.expired}')

    return credentials


def main():
    # Authenticate or get saved credentials
    credentials = authenticate()

    # Build the Gmail API service
    service = build('gmail', 'v1', credentials=credentials)

    # List all messages in the Inbox
    results = service.users().messages().list(userId='me', labelIds=['INBOX']).execute()
    print(f'Found {len(results)} e-mails in inbox')
    messages = results.get('messages', [])
    
    if not messages:
        print('No messages found.')
        return

    # Delete each message
    for message in messages:
        service.users().messages().delete(userId='me', id=message['id']).execute()
        print(f"Deleted message with ID: {message['id']}")

if __name__ == '__main__':
    main()
