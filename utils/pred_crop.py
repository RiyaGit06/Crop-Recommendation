import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split


def predict_crop(nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall):
    return get_prediction((nitrogen, phosphorous, potassium, temperature, humidity, ph, rainfall))

def get_prediction(x):

    df = pd.read_csv('./data/crop_recommendation.csv')
    # df_numeric = df.drop('label', axis = 1)
    features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]
    target = df['label']
    Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)

    RF = RandomForestClassifier(n_estimators=20, random_state=0)
    RF.fit(Xtrain,Ytrain)

    predicted_value = RF.predict(x)
    # x = metrics.accuracy_score(Ytest, predicted_values)
    # print("RF's Accuracy is: ", x)

    print(predicted_value)
    return predicted_value


# def get_prediction(x):
#     model = net.Net_64_128_64(7, 22)
#     model.load_state_dict(torch.load('model/baseline/baseline.hdf5'))
#     normalization = np.load("model/normalization/normalization.npz")
#     mean = normalization["mean"]
#     std = normalization["std"]
#     print(x)
#     input_vector = torch.tensor(x, dtype=torch.float32)
#     input_vector = (input_vector - mean) / std

#     # print(input_vector.double())

#     prediction = model(input_vector)

#     with open("model/pkl_files/encoder.pkl", "rb") as file:
#         encoder = pickle.load(file)

#     predicted = prediction.argmax().item()
#     encoded_labels = encoder.inverse_transform(np.array([predicted]))

#     # DEBUG
#     # print("Encoded labels:", encoded_labels)

#     return encoded_labels